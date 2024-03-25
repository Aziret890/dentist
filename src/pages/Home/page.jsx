import { useEffect } from 'react'
import AllServices from '../../widgets/common/AllServices'
import Doctor from '../../widgets/common/DoctorMen'
import Clinic from '../../widgets/common/InfoClinic'
import News from '../../widgets/common/News'
import Our from '../../widgets/common/Our'
import Partners from '../../widgets/common/Partners'
import Rating from '../../widgets/common/Rating'
import Reviews from '../../widgets/common/Reviews'
import Social from '../../widgets/common/Social'
import Teeth from '../../widgets/common/Teeth'
import Form1Home from '../../widgets/common/form1Home'
import { FaArrowRight } from 'react-icons/fa'
import { useMoreDetail } from '../../entity/more_detail/store'

export default function Home() {
  const { setModalContent } = useMoreDetail()
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
        <div className="reviews-title">
          <h1 data-aos="fade-up" data-aos-duration={1 * 300}>
            Только честные отзывы
          </h1>
          <p className="none" data-aos="fade-up" data-aos-duration={2 * 300}>
            <button className="flex gap-3 items-center">
              Все отзывы <FaArrowRight />
            </button>
          </p>
        </div>
      </Reviews>
    </>
  )
}
