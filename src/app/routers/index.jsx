import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/page'
import AboutClinic from '../../pages/AboutClinic/page'
import Doctors from '../../pages/Doctors/page'
import Index from '../../pages/Vakancies/Index'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about/clinic' element={<AboutClinic />} />
				<Route path='/about/vakancies' element={<Index />} />
				<Route path='/doctors' element={<Doctors />} />
			</Routes>
		</>
	)
}
