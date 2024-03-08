import { create } from 'zustand'

export const useMoreDetail = create(set => ({
	isModal: false,
	toggleIsModal: d => {
		set(() => ({
			isModal: d 
		}))
	}
}))
