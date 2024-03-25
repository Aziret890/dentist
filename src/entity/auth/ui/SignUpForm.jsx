/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FcAddImage } from 'react-icons/fc'
import { handleImageUpload } from '../../../features/Base64File'
import { handleSignUp } from '../api/fetch'
import { useAuth } from '../store'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export default function SignInForm({ styles }) {
  const [base64String, setBase64String] = useState(null)
  const { setIsAuth } = useAuth()
  const nav = useNavigate()
  return (
    <form
      className={`${styles.form} `}
      onSubmit={async (e) => {
        const result = await handleSignUp(e, base64String)
        if (result === 'success') {
          toast.success('Регистрация прошла успешно')
          setTimeout(() => {
            setIsAuth(null)
          }, 300)
          nav('/')
        }
      }}
    >
      <div className={styles.input_box}>
        <input required placeholder="Имя" type="text" name="firstName" id="text" minLength={3} />
      </div>
      <div className={styles.input_box}>
        <input placeholder="Фамилия (необязательно)" type="text" name="lastName" id="text" minLength={3} />
      </div>
      <div className={styles.input_box}>
        <input required placeholder="Электронная почта" type="email" name="email" id="email" minLength={5} />
      </div>
      <div className={styles.input_box}>
        <input required placeholder="Пароль" type="password" name="password" id="password" minLength={5} />
      </div>
      <div className={styles.input_boxes}>
        <label htmlFor="file_image">
          <FcAddImage />
          {base64String !== null ? 'Добавить' : 'Изменить'} фотографию (необязательно)
        </label>
        <input onChange={(e) => setBase64String(e.target.files[0])} hidden type="file" name="file" id="file_image" />
      </div>
      <button className={styles.sign} type="submit">
        Зарегистрироваться
      </button>
    </form>
  )
}
