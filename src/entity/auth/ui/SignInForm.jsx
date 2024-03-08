/* eslint-disable react/prop-types */
import { handleSignIn } from '../api/fetch'

export default function SignInForm({ styles }) {
	return (
		<form onSubmit={handleSignIn} className={styles.form}>
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
				/>
			</div>
			<button className={styles.sign} type='submit'>
				Войти
			</button>
		</form>
	)
}
