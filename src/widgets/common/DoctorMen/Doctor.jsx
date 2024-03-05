import { useRef, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import Slider from 'react-slick'
import men from '../../../shared/assets/images/men.png'
import './doctor.css'

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
		beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
	}

	const handleTitleClick = index => {
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
			name: 'Детальная диагностика и планирование',
			description:
				'Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.',
			description2:
				'Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению'
		},
		{
			num: 2,
			title: 'Что надо знать, выбирая клинику?',
			name: 'Детальная диагностика и планирование',
			description:
				'Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.',
			description2:
				'Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению'
		},
		{
			num: 3,
			title: 'Что надо знать, выбирая клинику?',
			name: 'Детальная диагностика и планирование',
			description:
				'Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.',
			description2:
				'Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению'
		},
		{
			num: 4,
			title: 'Что надо знать, выбирая клинику?',
			name: 'Детальная диагностика и планирование',
			description:
				'Вам не должны предлагать установку имплантов в день посещения и только на основании панорамного снимка или визуального осмотра. Важна тщательная диагностика, а также проведение компьютерной томографии, сдача анализов крови.',
			description2:
				'Наша стоматология работает по международным стандартам комплексной диагностики: сбор анамнеза, комплексные анализы, визуальный осмотр полости рта, анализ компьютерной томографии, фотометрия лица пациента и снятие параметров прикуса. Только после этого имплантолог и ортопед могут составить предварительные планы лечения, которые впоследствии нужно будет уточнить в процессе компьютерного моделирования и дополнительной диагностики по назначению'
		}
	]

	return (
		<div className='container'>
			<div className='relative my-11'>
				{/* Слайдер */}
				<Slider {...sliderSettings} ref={sliderRef}>
					{slidesContent.map((content, index) => (
						<div
							className='hh w-full h-[656px] bg-[#F2FAFB] flex items-center justify justify-between px-4'
							key={index}
						>
							<div className='flex items-center justify-between px-[60px]'>
								<div className='w-[510px]'>
									<h3 className='text-3xl flex gap-3 text-black font-[700] leading-6 pt-14'>
										<div className=''>
											<div className='no'>
												<img
													className=' w-[66px] h-[62px] rounded-full object-cover'
													src={men}
													alt='img'
												/>
											</div>
										</div>
										{content.title}
									</h3>

									<div className='flex items-center justify-between gap-11'>
										<div
											className='flex gap-2 '
											style={{
												textAlign: 'center',
												marginTop: '20px'
											}}
										>
											{slidesContent.map((content, index) => (
												<span
													className='hover:border-b-2 border-[#2CB2BB] text-[#2CB2BB]'
													key={index}
													onClick={() => handleTitleClick(index)}
													style={{
														cursor: 'pointer',
														marginRight: '10px',
														fontWeight:
															currentSlide === index ? 'bold' : 'normal',
														color: currentSlide === index ? 'black' : '#2CB2BB'
													}}
												>
													<button
														style={{
															fontWeight: '700',
															color:
																currentSlide === index ? 'white' : '#2CB2BB',
															background:
																currentSlide === index ? '#2CB2BB' : 'white'
														}}
														className='btn text-[#2CB2BB]'
													>
														{' '}
														{content.num}
													</button>
												</span>
											))}
										</div>
										<div className=''>
											<button
												onClick={handleNextSlide}
												className='relative pt-5 inline-flex items-center text-lg justify-center w-[202px] from-cyan-500  group-hover:from-cyan-500 group-hover:to-[#2CB2BB] hover:text-[#2CB2BB] dark:text-[#2CB2BB] hover:scale-110 duration-200 my-7'
											>
												<span className='relative font-bold px-5 text-sm py-[13px] transition-all ease-in duration-75 bg-[#2CB2BB] text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
													Следующий шаг
												</span>
											</button>
										</div>
									</div>

									<h1 className='text-lg my-4 text-black font-bold'>
										{content.name}
									</h1>
									<div className='flex items-start gap-3'>
										<span className='mt-3 text-[#2CB2BB]'>
											<BiCheck />
										</span>

										<h1 className='tt font-normal my-3 text-black'>
											{content.description}
										</h1>
									</div>

									<div className='flex items-start gap-3'>
										<span className='mt-3 text-[#2CB2BB]'>
											<BiCheck />
										</span>

										<h1 className='tt font-normal my-3 text-black'>
											{content.description2}
										</h1>
									</div>
								</div>
								<div className='blo'>
									<img
										className=' object-cover w-[386px] h-[612px] mb-[-100px]'
										src='https://s3-alpha-sig.figma.com/img/c1a1/2765/8cca3b0bcec00a13f839629d8ce068fd?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZmPo6~aGj~-VngyQcvS39aCVlKXCfTW2oDwQBOfIw~bwsvtnzJCGrYepfpIuw3CRwPyLGcN7REedSXyem4usMZ~USGFv-Ytz61EIkSqPS8dTcugp2kPULjLU6vBKqlS6Ho3gsDWSMPjo4FnovdSs6dBibx9r2kk--8Zj3wM2utDAWhYG-qWnrYko-P5dw0zNKnAHBlodDXfoBA0V8AzIfACpIz0AjaPSBYKcuMS8mU4VSHcnh-6akku4m1wUUi9nRiHqlkeYrij3mFBBtkhY0vIcPNCB2mW4cWn1KfWs1awz3NVi08CGaBrLt0tfb9z93RwuCHHU1-IZn5M6kSYj-w__'
										alt='img'
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
