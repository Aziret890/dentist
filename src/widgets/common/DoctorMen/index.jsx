import { useRef, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import Slider from 'react-slick'
import men from '../../../shared/assets/images/men.png'
import './doctor.css'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'
import doctorHome from '../../../shared/assets/images/doctorHome.png'
const Doctor = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  }

  const handleTitleClick = (index) => {
    setCurrentSlide(index)
    sliderRef.current.slickGoTo(index)
  }

  const handleNextSlide = () => {
    sliderRef.current.slickNext()
  }

  const slidesContent = [
    {
      num: 1,
      title: 'Что надо знать, выбирая  клинику?',
      name: 'Детальная диагностика и планирование',
      description:
        'Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.',
      description2:
        'Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению',
    },
    {
      num: 2,
      title: 'Что надо знать, выбирая клинику?',
      name: 'Детальная диагностика и планирование',
      description:
        'Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.',
      description2:
        'Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению',
    },
    {
      num: 3,
      title: 'Что надо знать, выбирая клинику?',
      name: 'Детальная диагностика и планирование',
      description:
        'Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.',
      description2:
        'Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению',
    },
    {
      num: 4,
      title: 'Что надо знать, выбирая клинику?',
      name: 'Детальная диагностика и планирование',
      description:
        'Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.',
      description2:
        'Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению',
    },
  ]

  const { width } = useWindowSize()

  return (
    <div className="container">
      <div className="relative my-11">
        {/* Слайдер */}
        <Slider {...sliderSettings} ref={sliderRef}>
          {slidesContent.map((content, idx) => (
            <div
              className="hh w-full h-auto bg-[#F2FAFB] flex items-center justify justify-between px-4 pb-12"
              key={idx}
            >
              <div
                className={`flex items-center justify-between px-[60px] 540:px-5 1000:px-[10px] 840:px-5 ${
                  width <= 940 && width >= 840 ? 'px-3' : width <= 840 && width >= 740 ? 'px-3' : ''
                }`}
              >
                <div data-aos="fade-up" data-aos-duration={idx * 300} className="w-[510px] 840:w-full">
                  <div className="flex gap-3 text-black font-[700] 640:items-center 540:items-center leading-6 pt-14">
                    <div className="no">
                      <img
                        data-aos="fade-up"
                        data-aos-duration={idx * 300}
                        className=" w-[66px] h-[62px] rounded-full object-cover"
                        src={men}
                        alt="img"
                      />
                    </div>
                    <h3 className="540:text-xl text-3xl">{content.title}</h3>
                  </div>

                  <div className="flex items-center 640:mt-5 640:w-3/5 540:mt-5 540:w-full 540:justify-center 640:justify-between gap-11">
                    <div data-aos="fade-up" data-aos-duration={idx * 300} className="flex gap-2 text-center">
                      {slidesContent.map((content, index) => (
                        <span
                          data-aos="fade-up"
                          data-aos-duration={index * 300}
                          key={index}
                          onClick={() => handleTitleClick(index)}
                          style={{
                            cursor: 'pointer',
                            marginRight: '10px',
                            fontWeight: currentSlide === index ? 'bold' : 'normal',
                            color: currentSlide === index ? 'black' : '#2CB2BB',
                          }}
                          className="btns"
                        >
                          <button
                            style={{
                              fontWeight: '700',
                              color: currentSlide !== index ? '#2cb2bb' : 'white',
                              backgroundColor: currentSlide === index ? '#2CB2BB' : 'white',
                            }}
                            className=" text-[#2CB2BB]"
                          >
                            {' '}
                            {content.num}
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="540:hidden 640:hidden">
                      <button
                        data-aos="fade-up"
                        data-aos-duration={idx * 500}
                        onClick={handleNextSlide}
                        className="relative  inline-flex items-center text-lg justify-center w-[202px] from-cyan-500  group-hover:from-cyan-500 group-hover:to-[#2CB2BB] hover:text-[#2CB2BB] dark:text-[#2CB2BB] hover:scale-110 duration-200 my-7"
                      >
                        <span className="relative font-bold px-5 text-sm py-[13px] transition-all ease-in duration-75 bg-[#2CB2BB] text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Следующий шаг
                        </span>
                      </button>
                    </div>
                  </div>

                  <h1 data-aos="fade-up" data-aos-duration={idx * 300} className="text-lg my-4 text-black font-bold">
                    {content.name}
                  </h1>
                  <div className="flex items-start gap-3">
                    <span data-aos="fade-up" data-aos-duration={idx * 300} className="mt-3 text-[#2CB2BB]">
                      <BiCheck />
                    </span>

                    <p
                      data-aos="fade-up"
                      data-aos-duration={idx * 300}
                      className="tt font-normal my-3 text-black w-full 540:pr-10"
                    >
                      {content.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span data-aos="fade-up" data-aos-duration={idx * 300} className="mt-3 text-[#2CB2BB]">
                      <BiCheck />
                    </span>

                    <p
                      data-aos="fade-up"
                      data-aos-duration={idx * 300}
                      className="tt w-full font-normal my-3 text-black 540:pr-10"
                    >
                      {content.description2}
                    </p>
                  </div>
                </div>
                <div className="blo">
                  <img
                    data-aos="fade-up"
                    data-aos-duration={idx * 300}
                    className=" object-cover w-[386px] h-[612px] mb-[-100px]"
                    src={doctorHome}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
// /awefawfeawfew/
export default Doctor

//funished
