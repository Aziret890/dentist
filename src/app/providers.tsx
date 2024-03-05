import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DocProviders } from './context/DoctorsContext'

export default function Providers({ children }) {
	return (
		<BrowserRouter>
			<DocProviders>{children}</DocProviders>
		</BrowserRouter>
	)
}
