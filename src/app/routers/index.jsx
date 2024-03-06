import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/page'
import AboutClinic from '../../pages/AboutClinic/page'
import Doctors from '../../pages/Doctors/page'
import Index from '../../pages/Vakancies/Index'
import DetailDoctors from '../../pages/DetailDoctors/page'
import Sale from '../../widgets/sale/Sale'
import Page from '../../pages/Services/Page'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about/clinic' element={<AboutClinic />} />
				<Route path='/about/vakancies' element={<Index />} />
				<Route path='/doctors' element={<Doctors />} />
				<Route path='/doctors/:docId' element={<DetailDoctors />} />
				<Route path='/sale' element={<Sale />} />
				<Route path='/services' element={<Page />} />
			</Routes>
		</>
	)
}
