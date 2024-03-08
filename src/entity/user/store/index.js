import { create } from 'zustand'


export const useCurrentUser = create(set=> ({
	currentUser: null,
	async setCurrentUser(){

	},
	async getCurrentUser(){},
	async updateCurrentUser(){}
}))
