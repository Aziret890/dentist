import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/page'
import AboutClinic from '../../pages/AboutClinic/page'

export default function Routers() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about/clinic' element={<AboutClinic />} />
			</Routes>
		</main>
	)
}
