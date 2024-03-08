/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FcAddImage } from 'react-icons/fc'
import { handleImageUpload } from '../../../features/Base64File'

export default function SignInForm({ styles }) {
	const [base64String, setBase64String] = useState('')

	return (
		<form
			className={`${styles.form} ${
				base64String.trim() !== '' ? styles.form_up : ''
			}`}
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
					placeholder='Имя пользователя'
					type='text'
					name='text'
					id='text'
					minLength={6}
				/>
			</div>
			<div className={styles.input_box}>
				<input
					required
					placeholder='Электронная почта'
					type='email'
					name='email'
					id='email'
					minLength={10}
				/>
			</div>
			<div className={styles.input_box}>
				<input
					required
					placeholder='Пароль'
					type='password'
					name='password'
					id='password'
					minLength={6}
				/>
			</div>
			<div className={styles.input_boxes}>
				<label htmlFor='file_image'>
					<FcAddImage />
					{base64String.trim() === '' ? 'Добавить' : 'Изменить'} фотографию{' '}
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
