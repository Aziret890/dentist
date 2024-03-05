import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/page'
import AboutClinic from '../../pages/AboutClinic/page'
import Doctors from '../../pages/Doctors/page'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about/clinic' element={<AboutClinic />} />
				<Route path='/doctors' element={<Doctors />} />
			</Routes>
		</>
	)
}
