import { Route, Routes } from 'react-router-dom'
import AboutClinic from '../../pages/AboutClinic/page'
import DetailDoctors from '../../pages/DetailDoctors/page'
import Doctors from '../../pages/Doctors/page'
import Home from '../../pages/Home/page'
import ServicesPage from '../../pages/Services/Page'
import VacancyPage from '../../pages/Vakancies/Index'
import Sale from '../../pages/Sale'
import PricePage from '../../pages/Price/page'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact/information' element={<AboutClinic />} />
				<Route path='/vacancy' element={<VacancyPage />} />
				<Route path='/doctors' element={<Doctors />} />
				<Route path='/doctors/:docId' element={<DetailDoctors />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/action' element={<Sale />} />
				<Route path='/price' element={<PricePage />} />
			</Routes>
		</>
	)
}
