import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DocProviders } from './context/DoctorsContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function Providers({ children }) {
	return (
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<DocProviders>{children}</DocProviders>
			</BrowserRouter>
		</QueryClientProvider>
	)
}
