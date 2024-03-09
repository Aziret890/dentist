/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FcAddImage } from 'react-icons/fc'
import { handleImageUpload } from '../../../features/Base64File'
import { handleSignUp } from '../api/fetch'
import { useAuth } from '../store'
import { toast } from 'react-toastify'

export default function SignInForm({ styles }) {
	const [base64String, setBase64String] = useState('')
	const { setIsAuth } = useAuth()

	return (
		<form
			className={`${styles.form} ${
				base64String.trim() !== '' ? styles.form_up : ''
			}`}
			onSubmit={async e => {
				const result = await handleSignUp(e)
				if (result === 'success') {
					toast.success('Регистрация прошла успешно')
					setTimeout(() => {
						setIsAuth(null)
					}, 300)
				}
			}}
		>
			{base64String.trim() !== '' && (
				<div className={styles.user_avatar}>
					<img
						title='Удалить'
						onClick={() => {
							setTimeout(() => {
								setBase64String('')
							}, 300)
						}}
						src={'data:image/web;base64,' + base64String}
						alt='user'
					/>
				</div>
			)}
			<div className={styles.input_box}>
				<input
					required
					placeholder='Имя'
					type='text'
					name='firstName'
					id='text'
					minLength={3}
				/>
			</div>
			<div className={styles.input_box}>
				<input
					placeholder='Фамилия (необязательно)'
					type='text'
					name='lastName'
					id='text'
					minLength={3}
				/>
			</div>
			<div className={styles.input_box}>
				<input
					required
					placeholder='Электронная почта'
					type='email'
					name='email'
					id='email'
					minLength={5}
				/>
			</div>
			<div className={styles.input_box}>
				<input
					required
					placeholder='Пароль'
					type='password'
					name='password'
					id='password'
					minLength={5}
				/>
			</div>
			<div className={styles.input_boxes}>
				<label htmlFor='file_image'>
					<FcAddImage />
					{base64String.trim() === '' ? 'Добавить' : 'Изменить'} фотографию
					(необязательно)
				</label>
				<input
					onChange={e => handleImageUpload(e, setBase64String)}
					hidden
					type='file'
					name='file'
					id='file_image'
				/>
			</div>
			<button className={styles.sign} type='submit'>
				Зарегистрироваться
			</button>
		</form>
	)
}
