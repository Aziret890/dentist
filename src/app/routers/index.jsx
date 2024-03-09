import { Route, Routes } from 'react-router-dom'
import AboutClinicPage from '../../pages/AboutClinic/page'
import ContactInformation from '../../pages/ContactInformation/page'
import DetailDoctors from '../../pages/DetailDoctors/page'
import Doctors from '../../pages/Doctors/page'
import Home from '../../pages/Home/page'
import News from '../../pages/News/page'
import PricePage from '../../pages/Price/page'
import ServicesPage from '../../pages/Services/page'
import NotFoundPage from '../../pages/NotFoundPage/page'
import ReviewsPage from '../../pages/ReviewsPage/page'
import FreeConsultation from '../../pages/FreeConsultation/page'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact/information' element={<ContactInformation />} />
				<Route path='/about/clinic' element={<AboutClinicPage />} />
				<Route path='/doctors' element={<Doctors />} />
				<Route path='/doctors/:docId' element={<DetailDoctors />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/price' element={<PricePage />} />
				<Route path='/consultancy' element={<FreeConsultation />} />
				<Route path='/news' element={<News />} />
				<Route path='/reviews' element={<ReviewsPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}
