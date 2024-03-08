import { useEffect } from 'react'
import AllServices from '../../widgets/common/AllServices'
import Doctor from '../../widgets/common/DoctorMen/Doctor'
import Clinic from '../../widgets/common/InfoClinic/Clinic'
import News from '../../widgets/common/News/News'
import Our from '../../widgets/common/Our/Our'
import Partners from '../../widgets/common/Partners/Partners'
import Rating from '../../widgets/common/Rating/Rating'
import Reviews from '../../widgets/common/Reviews/Reviews'
import Social from '../../widgets/common/Social/Social'
import Teeth from '../../widgets/common/Teeth/Teeth'
import Form1Home from '../../widgets/common/form1Home/Form1Home'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
	useEffect(() => {
		document.title = 'Newyork dentist'
	}, [])
	return (
		<>
			<Teeth />
			<AllServices />
			<Rating />
			<Our />
			<Social />
			<Form1Home />
			<Clinic />
			<Partners />
			<News />
			<Doctor />
			<Reviews>
				<div className='reviews-title'>
					<h1 data-aos='fade-up' data-aos-duration={1 * 300}>
						Только честные отзывы
					</h1>
					<p className='none' data-aos='fade-up' data-aos-duration={2 * 300}>
						Все отзывы <FaArrowRight />
					</p>
				</div>
			</Reviews>
		</>
	)
}
