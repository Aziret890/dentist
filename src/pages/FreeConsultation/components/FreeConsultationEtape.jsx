import { useState } from 'react'
import styles from '../page.module.scss'
import clsx from 'clsx'
import Complete from './images/complete.svg'
import Reboot from './images/reboot.svg'
import Delete from './images/delete.svg'
import ThirdEtape from './ThirdEtape'
import { useConsultation } from '../../../entity/consultate/store'
import RequestAccepted from './RequestAccepted'
import { toast } from 'react-toastify'
import axios from 'axios'

const TELEGRAM_CHAT_ID = '@my_bot_channels'
const TELEGRAM_BOT_TOKEN = '6703159440:AAFp7poLT4sIqwrdD8lo-v3xSPb-i253L2c'
const API_SEND_PHOTO = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`
const API_SEND_MESSAGE = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

export default function FreeConsultationEtape() {
  const [dragOver, setDragOver] = useState(false)
  const [droppedImages, setDroppedImages] = useState([])
  const [loader, setLoader] = useState(false)

  const { comment, setRequest, request_accepted, setComment } = useConsultation()

  const sendImagesToTelegram = async (images, comment) => {
    setLoader(true)
    try {
      const chatId = TELEGRAM_CHAT_ID

      const mediaArray = []

      for (const image of images) {
        const fileFormData = new FormData()
        fileFormData.append('chat_id', chatId)
        fileFormData.append('photo', image.file)

        const response = await axios.post(API_SEND_PHOTO, fileFormData)

        if (response.status > 201) {
          console.log(response)
          return
        }
        const result = await response.data

        // Получение URL загруженного файла
        const fileUrl = result.result.photo[0].file_path

        // Добавление объекта медиа с ссылкой на файл в массив
        if (fileUrl) {
          mediaArray.push({
            type: 'photo',
            media: fileUrl,
            caption: `Caption for image ${mediaArray.length + 1}`,
          })
        }
      }

      const res = await axios.post(
        API_SEND_MESSAGE,
        {
          chat_id: chatId,
          text: `Комментарий: ${comment}`,
          parse_mode: 'html',
          reply_markup: {
            inline_keyboard: [[{ text: 'Посмотреть фото', callback_data: 'view_photos' }]],
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (res.status <= 299 && res.status >= 200) {
        setDroppedImages([])
        setComment('')
        setRequest(true)
        setLoader(false)
        toast.success('Заявка успешно отправлена')
      }
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error)

      // Добавьте вывод содержимого ошибки в консоль
      if (error.response) {
        console.error('Ответ сервера:', error.response.data)
      }
      setLoader(false)
      toast.error('Произошла ошибка при отправке заявки')
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => {
    setDragOver(false)
  }

  const handleDrop = (e, state) => {
    e.preventDefault()
    setDragOver(false)

    const files = e.dataTransfer.files
    const imageFiles = Array.from(files).filter((file) => file.type.startsWith('image/'))

    setDroppedImages((prevImages) =>
      prevImages.concat(imageFiles.map((image) => ({ file: image, progress: 0, state: state })))
    )

    imageFiles.forEach((_, index) => {
      setTimeout(() => {
        setDroppedImages((prevImages) =>
          prevImages.map((prevImage, i) =>
            i === prevImages.length - imageFiles.length + index
              ? { ...prevImage, progress: 100, imageId: Date.now() }
              : prevImage
          )
        )
      }, (index + 1) * 1000)
    })
  }

  function deleteDroppedImage(id) {
    setDroppedImages((prevImages) => {
      const newImages = prevImages.filter((item) => item.imageId !== id)
      return newImages
    })
  }

  return (
    <section className="mt-24">
      {loader && (
        <div className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center z-50 bg-[#00000080]">
          <span className="loader border-white"></span>
        </div>
      )}

      {!request_accepted ? (
        <>
          <div className={`container ${styles.container}`}>
            <div className={clsx(`${styles.first} ${styles.etape}`)}>
              <span className={`${styles.etape__num} ${styles.num__active}`}>1</span>
              <div className={styles.etape_start}>
                <h3>Загрузите фотографии сомкнутой челюсти</h3>
                <h5>Обязательно должно быть видно все проблемные зубы</h5>
              </div>
              <div
                className={clsx(styles.dragon_drop, {
                  [styles.drag_over]: dragOver,
                })}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'first')}
              >
                <h5>
                  Загрузить фотографии <br />
                  <span>перетащите изображение в эту область</span>
                </h5>
              </div>
              <div className={styles.downloaded_files}>
                <h4>Загруженные файлы:</h4>
                <ul>
                  {droppedImages
                    .filter((item) => item.state === 'first')
                    .map((image, index) => (
                      <li key={index}>
                        <div className={styles.files__left}>
                          <div className={styles.files_top}>
                            <div>
                              <img src={URL.createObjectURL(image.file)} alt={`Dropped Image ${index}`} />
                              <span>{image.file.name.slice(0, 20)}</span>
                            </div>
                            <span className={styles.percent}>{image.progress}%</span>
                          </div>
                          <div
                            className={clsx(styles.progress_bar, {
                              [styles.complete]: image.progress === 100,
                            })}
                            style={{ width: `${image.progress}%` }}
                          ></div>
                        </div>
                        <div className={styles.files__right}>
                          {image.progress === 100 ? (
                            <img src={Complete} alt="complete" />
                          ) : (
                            <img src={Reboot} alt="reboot" />
                          )}
                          <button className={styles.delete} onClick={() => deleteDroppedImage(image.imageId)}>
                            <img src={Delete} alt="delete" />
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className={clsx(`${styles.second} ${styles.etape}`)}>
              <span className={`${styles.etape__num} ${styles.num__active}`}>2</span>
              <div className={styles.etape_start}>
                <h3>Загрузите снимок зубов КТ или ОПГ</h3>
                <h5>Без снимка консультация возможна, но она будет менее точной</h5>
              </div>
              <div
                className={clsx(styles.dragon_drop, {
                  [styles.drag_over]: dragOver,
                })}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, 'second')}
              >
                <h5>
                  Загрузить фотографии <br />
                  <span>перетащите изображение в эту область</span>
                </h5>
              </div>
              <div className={styles.downloaded_files}>
                <h4>Загруженные файлы:</h4>
                <ul>
                  {droppedImages
                    .filter((item) => item.state === 'second')
                    .map((image, index) => (
                      <li key={index}>
                        <div className={styles.files__left}>
                          <div className={styles.files_top}>
                            <div>
                              <img src={URL.createObjectURL(image.file)} alt={`Dropped Image ${index}`} />
                              <span>{image.file.name.slice(0, 20)}</span>
                            </div>
                            <span className={styles.percent}>{image.progress}%</span>
                          </div>
                          <div
                            className={clsx(styles.progress_bar, {
                              [styles.complete]: image.progress === 100,
                            })}
                            style={{ width: `${image.progress}%` }}
                          ></div>
                        </div>
                        <div className={styles.files__right}>
                          {image.progress === 100 ? (
                            <img src={Complete} alt="complete" />
                          ) : (
                            <img src={Reboot} alt="reboot" />
                          )}
                          <button className={styles.delete} onClick={() => deleteDroppedImage(image.imageId)}>
                            <img src={Delete} alt="delete" />
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <ThirdEtape />
          </div>
          <div className={styles.send}>
            <button
              className={clsx({
                [styles.disabled]: comment.trim().length <= 20,
              })}
              onClick={() => {
                if (droppedImages.length > 0 && comment.trim().length > 20) {
                  sendImagesToTelegram(droppedImages, comment)
                  window.scrollTo(0, 800)
                } else {
                  toast.error('Добавьте фотографии и описание проблемы перед отправкой.')
                }
              }}
            >
              Отправить информацию
            </button>
            {comment.trim().length <= 20 && <span>Опишите проблему</span>}
          </div>
        </>
      ) : (
        <div className="container flex items-center justify-center">
          <RequestAccepted />
        </div>
      )}
    </section>
  )
}
