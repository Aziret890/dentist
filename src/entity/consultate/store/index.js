import { create } from 'zustand'

export const useConsultation = create(set => ({
	comment: '',
	request_accepted: false,
	setComment: e => {
		set(() => ({
			comment: e
		}))
	},
	setRequest: s => {
		set(() => ({
			request_accepted: s
		}))
	}
}))
