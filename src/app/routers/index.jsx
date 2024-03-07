import { Route, Routes } from 'react-router-dom'
import AboutClinic from '../../pages/AboutClinic/page'
import DetailDoctors from '../../pages/DetailDoctors/page'
import Doctors from '../../pages/Doctors/page'
import Home from '../../pages/Home/page'
import Page from '../../pages/Services/Page'
import Index from '../../pages/Vakancies/Index'
import Sale from '../../widgets/sale/Sale'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about/clinic' element={<AboutClinic />} />
				<Route path='/about/vakancies' element={<Index />} />
				<Route path='/doctors' element={<Doctors />} />
				<Route path='/doctors/:docId' element={<DetailDoctors />} />
				<Route path='/services' element={<Page />} />
				<Route path='/sale' element={<Sale />} />
			</Routes>
		</>
	)
}
