import axios from 'axios'
import { baseURL } from '../../../api/URL'

/**
 *
 * @param {import('react').FormEvent<HTMLFormElement>} e
 */
export async function handleSignIn(e) {
	e.preventDefault()

	let email = e.target.email.value
	let password = e.target.password.value

	if (!email.includes('@gmail.com')) {
		alert('There is no @gmail.com in the email field.')
	}

	const user = {
		email,
		password
	}

	try {
		const res = await axios.post(
			`https://akmatovt.pythonanywhere.com/login/`,
			user
		)

		const data = await res.data
		console.log(data, 'data')
	} catch (error) {
		console.log({ error }, 'error')
	}
}

/**
 *
 * @param {import('react').FormEvent<HTMLFormElement>} e
 */
export async function handleSignUp(e) {
	e.preventDefault()

	let email = e.target.email.value
	let username = e.target.email.value
	let password = e.target.password.value

	if (!email.includes('@gmail.com')) {
		alert('There is no @gmail.com in the email field.')
	}

	const newUser = {
		email,
		password,
		username
	}

	try {
		const res = await axios.post(
			`https://akmatovt.pythonanywhere.com/registration/`,
			newUser
		)

		const data = await res.data
		console.log(data, 'data')
	} catch (error) {
		console.log({ error }, 'error')
	}
}
