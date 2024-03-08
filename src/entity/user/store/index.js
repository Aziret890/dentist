import axios from 'axios'
import Cookies from 'js-cookie'
import { create } from 'zustand'

export const useCurrentUser = create(set => ({
	currentUser: null,
	async getCurrentUser() {
		try {
			const userId = Cookies.get('userId')

			const { data } = await axios.get(
				`https://akmatovt.pythonanywhere.com/user/${userId || 41}/`
			)
			set(() => ({
				currentUser: data
			}))
			return data
		} catch (error) {
			console.log(error, 'err')
		}
	},
	async updateCurrentUser() {}
}))
