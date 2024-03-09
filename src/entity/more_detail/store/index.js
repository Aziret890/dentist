import { create } from 'zustand'

export const useMoreDetail = create(set => ({
	modalContent: null,
	setModalContent: d => {
		set(() => ({
			modalContent: d
		}))
	}
}))
