import React, { useState } from 'react'
import styles from '../page.module.scss'
import clsx from 'clsx'
import Complete from './images/complete.svg'
import Reboot from './images/reboot.svg'
import Delete from './images/delete.svg'
import ThirdEtape from './ThirdEtape'
import { useConsultation } from '../../../entity/consultate/store'
import RequestAccepted from './RequestAccepted'
import { toast } from 'react-toastify'

export default function FreeConsultationEtape() {
	const [dragOver, setDragOver] = useState(false)
	const [droppedImages, setDroppedImages] = useState([])

	const { comment, setRequest, request_accepted, setComment } =
		useConsultation()

	const handleDragOver = e => {
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
		const imageFiles = Array.from(files).filter(file =>
			file.type.startsWith('image/')
		)

		setDroppedImages(prevImages =>
			prevImages.concat(
				imageFiles.map(image => ({ file: image, progress: 0, state: state }))
			)
		)

		imageFiles.forEach((image, index) => {
			setDroppedImages(prevImages =>
				prevImages.map((prevImage, i) =>
					i === prevImages.length - imageFiles.length + index
						? { ...prevImage, progress: 100, imageId: Date.now() }
						: prevImage
				)
			)
		})
	}

	function deleteDroppedImage(id) {
		setDroppedImages(prevImages => {
			const newImages = prevImages.filter(item => item.imageId !== id)
			return newImages
		})
	}

	return (
		<section className='mt-24'>
			{!request_accepted ? (
				<>
					<div className={`container ${styles.container}`}>
						<div className={clsx(`${styles.first} ${styles.etape}`)}>
							<span className={`${styles.etape__num} ${styles.num__active}`}>
								1
							</span>
							<div className={styles.etape_start}>
								<h3>Загрузите фотографии сомкнутой челюсти</h3>
								<h5>Обязательно должно быть видно все проблемные зубы</h5>
							</div>
							<div
								className={clsx(styles.dragon_drop, {
									[styles.drag_over]: dragOver
								})}
								onDragOver={handleDragOver}
								onDragLeave={handleDragLeave}
								onDrop={e => handleDrop(e, 'first')}
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
										.filter(item => item.state === 'first')
										.map((image, index) => (
											<li key={index}>
												<div className={styles.files__left}>
													<div className={styles.files_top}>
														<div>
															<img
																src={URL.createObjectURL(image.file)}
																alt={`Dropped Image ${index}`}
															/>
															<span>{image.file.name.slice(0, 20)}</span>
														</div>
														<span className={styles.percent}>
															{image.progress}%
														</span>
													</div>
													<div
														className={clsx(styles.progress_bar, {
															[styles.complete]: image.progress === 100
														})}
														style={{ width: `${image.progress}%` }}
													></div>
												</div>
												<div className={styles.files__right}>
													{image.progress === 100 ? (
														<img src={Complete} alt='complete' />
													) : (
														<img src={Reboot} alt='reboot' />
													)}
													<button
														className={styles.delete}
														onClick={() => deleteDroppedImage(image.imageId)}
													>
														<img src={Delete} alt='delete' />
													</button>
												</div>
											</li>
										))}
								</ul>
							</div>
						</div>
						<div className={clsx(`${styles.second} ${styles.etape}`)}>
							<span className={`${styles.etape__num} ${styles.num__active}`}>
								2
							</span>
							<div className={styles.etape_start}>
								<h3>Загрузите снимок зубов КТ или ОПГ</h3>
								<h5>
									Без снимка консультация возможна, но она будет менее точной
								</h5>
							</div>
							<div
								className={clsx(styles.dragon_drop, {
									[styles.drag_over]: dragOver
								})}
								onDragOver={handleDragOver}
								onDragLeave={handleDragLeave}
								onDrop={e => handleDrop(e, 'second')}
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
										.filter(item => item.state === 'second')
										.map((image, index) => (
											<li key={index}>
												<div className={styles.files__left}>
													<div className={styles.files_top}>
														<div>
															<img
																src={URL.createObjectURL(image.file)}
																alt={`Dropped Image ${index}`}
															/>
															<span>{image.file.name.slice(0, 20)}</span>
														</div>
														<span className={styles.percent}>
															{image.progress}%
														</span>
													</div>
													<div
														className={clsx(styles.progress_bar, {
															[styles.complete]: image.progress === 100
														})}
														style={{ width: `${image.progress}%` }}
													></div>
												</div>
												<div className={styles.files__right}>
													{image.progress === 100 ? (
														<img src={Complete} alt='complete' />
													) : (
														<img src={Reboot} alt='reboot' />
													)}
													<button
														className={styles.delete}
														onClick={() => deleteDroppedImage(image.imageId)}
													>
														<img src={Delete} alt='delete' />
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
								[styles.disabled]: comment.trim().length <= 20
							})}
							onClick={() => {
								toast.success('Application successfully sent')
								setTimeout(() => {
									setRequest(true)
									setComment('')
									window.scrollTo(0, 800)
								}, 1200)
							}}
						>
							Отправить информацию
						</button>
						{comment.trim().length <= 20 && <span>Опишите проблему</span>}
					</div>
				</>
			) : (
				<div className='container flex items-center justify-center'>
					<RequestAccepted />
				</div>
			)}
		</section>
	)
}
