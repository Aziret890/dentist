import axios from 'axios'
import Cookies from 'js-cookie'
import { create } from 'zustand'
import Cookie from 'js-cookie'

export const useCurrentUser = create(set => ({
	currentUser: null,
	async getCurrentUser() {
		try {
			const userId = Cookies.get('userId')
			if (!userId) {
				return
			}

			const { data } = await axios.get(
				`https://akmatovt.pythonanywhere.com/user/${userId}/`
			)
			if (!data) {
				Cookie.remove('userToken')
				Cookie.remove('userId')
			}
			set(() => ({
				currentUser: data
			}))
			return data
		} catch (error) {
			if (!error) {
				Cookie.remove('userToken')
				Cookie.remove('userId')
			}
			console.log(error, 'err')
		}
	},
	async updateCurrentUser() {}
}))
