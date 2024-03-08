/* eslint-disable react/prop-types */

import { useState } from 'react'
import { createContext, useContext } from 'react'
import { docTabsArr } from '../../entity/const/doc.const'
import axios from 'axios'

const DoctorsContext = createContext()

export const useDoc = () => {
	return useContext(DoctorsContext)
}

export const DocProviders = ({ children }) => {
	const [docTabs, setDocTabs] = useState(docTabsArr)
	const [tabSpec, setTabSpec] = useState('все врачи')
	const [queryDoc, setQueryDoc] = useState('')

	const [doctors, setDoctors] = useState([])

	const inputBind = {
		value: queryDoc,
		onChange: e => setQueryDoc(e.target.value)
	}

	async function getDoctors() {
		try {
			const res = await axios('https://akmatovt.pythonanywhere.com/doctor/', {
				timeout: 1800
			})

			let filteredDoctors = res.data

			if (queryDoc) {
				const queryLowerCase = queryDoc.toLowerCase()
				filteredDoctors = filteredDoctors.filter(
					doctor =>
						doctor.firstName.toLowerCase().includes(queryLowerCase) ||
						doctor.lastName.toLowerCase().includes(queryLowerCase)
				)
			}

			if (tabSpec !== 'все врачи') {
				filteredDoctors = filteredDoctors.filter(doctor =>
					doctor.spec.some(
						item => item.title.toLowerCase() === tabSpec.toLowerCase()
					)
				)
			}

			setDoctors(filteredDoctors)
			return filteredDoctors
		} catch (error) {
			console.log('doctors [err]', error)
		}
	}

	const filteredDoc = Array.isArray(doctors) ? doctors : []
	const values = {
		docTabs,
		inputBind,
		setDocTabs,
		tabSpec,
		setTabSpec,
		filteredDoc,
		getDoctors,
		queryDoc
	}

	return (
		<DoctorsContext.Provider value={values}>{children}</DoctorsContext.Provider>
	)
}
