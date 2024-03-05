/* eslint-disable react/prop-types */

import { useState } from 'react'
import { createContext, useContext } from 'react'
import { docArr, docTabsArr } from '../../entity/const/doc.const'

const DoctorsContext = createContext()

export const useDoc = () => {
	return useContext(DoctorsContext)
}

export const DocProviders = ({ children }) => {
	const [docTabs, setDocTabs] = useState(docTabsArr)
	const [tabState, setTabState] = useState('все врачи')
	const [queryDoc, setQueryDoc] = useState('')

	const inputBind = {
		value: queryDoc,
		onChange: e => setQueryDoc(e.target.value)
	}

	const filteredDoc = docArr.filter(doc => {
		return doc.name.toLowerCase().trim().includes(queryDoc.toLowerCase().trim())
	})
	const values = {
		docTabs,
		inputBind,
		setDocTabs,
		tabState,
		setTabState,
		filteredDoc
	}

	return (
		<DoctorsContext.Provider value={values}>{children}</DoctorsContext.Provider>
	)
}
