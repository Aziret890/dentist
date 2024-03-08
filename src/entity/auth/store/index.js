import { create } from 'zustand'

export const useAuth = create()(set => ({
	isAuth: null,
	setIsAuth(data) {
		set({
			isAuth: data
		})
	}
}))
