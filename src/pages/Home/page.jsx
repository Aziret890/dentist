<<<<<<< HEAD
=======
import { useEffect } from 'react'
>>>>>>> 2d33020f527862d4324dcec9bd660a755f250483
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
<<<<<<< HEAD

=======
>>>>>>> 2d33020f527862d4324dcec9bd660a755f250483
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
			<Reviews />
		</>
	)
}
