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
export default function Home() {
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
