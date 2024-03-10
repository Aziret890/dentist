import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRef, useState } from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import { Link, NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'

const OurDoctors = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const sliderRef = useRef(null)

	const sliderSettings = {
		dots: false,
		infinite: false,
		speed: 1300,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (_, newIndex) => setCurrentSlide(newIndex)
	}

	const handleTitleClick = index => {
		setCurrentSlide(index)
		sliderRef.current.slickGoTo(index)
	}

	const { isLoading, data } = useQuery({
		queryKey: ['docs'],
		queryFn: async () => {
			return (await axios('https://akmatovt.pythonanywhere.com/doctor/')).data
		}
	})

	const { width } = useWindowSize()

	return (
		width > 841 && (
			<div className='container py-10'>
				<div className='flex items-center justify-between'>
					<h1 className=' text-[#253F41] text-2xl font-bold'>Наши врачи</h1>
					<NavLink
						to={'/doctors'}
						onClick={() => {
							window.scrollTo(0, 0)
						}}
						className='flex items-center gap-2 text-[#2CB2BB] font-bold text-sm'
					>
						Все врачи <GrFormNextLink />
					</NavLink>
				</div>
				<div className='relative my-11'>
					<Slider {...sliderSettings} ref={sliderRef}>
						{data?.map((content, index) => (
							<div
								className='w-full h-[464px] bg-[#F2FAFB] flex items-center justify justify-between px-11'
								key={index}
							>
								<div className='flex items-end justify-between px-11'>
									<div className='w-[528px] pb-20'>
										<h1 className='text-2xl text-black font-bold capitalize '>
											<span>{content.firstName.toLowerCase()} </span>
											{content.lastName.toLowerCase()} <span></span>
											{content.sureName.toLowerCase()}
										</h1>
										<div className='flex items-center gap-2'>
											<ul className='text-[12px] my-4 flex items-center font-medium text-[#97A6A7]'>
												{content?.spec
													?.map(specs => (
														<li key={specs.id}>{specs?.title},</li>
													))
													.slice(0, 2)}
											</ul>
											<span className='text-[12px] my-4 flex items-center font-medium text-[#97A6A7]'>
												опыт {content.experience} лет
											</span>
										</div>

										<div className='flex items-center gap-4'>
											<svg
												width='56'
												height='56'
												viewBox='0 0 56 56'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<rect width='56' height='56' rx='16' fill='#2CB2BB' />
												<path
													d='M31.786 25.4085L37.9997 11.3335L31.786 25.4085ZM23.5265 25.7207L16.333 11.3335L23.5265 25.7207ZM29.2688 24.7467L22.7247 11.3335L29.2688 24.7467ZM31.933 11.3335L30.1997 15.5002L31.933 11.3335ZM17.9997 34.6668C17.9997 40.1897 22.4768 44.6668 27.9997 44.6668C33.5225 44.6668 37.9997 40.1897 37.9997 34.6668C37.9997 29.144 33.5225 24.6668 27.9997 24.6668C22.4768 24.6668 17.9997 29.144 17.9997 34.6668Z'
													stroke='white'
													strokeWidth='1.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
											<h3 className='text-sm text-[#2CB2BB]'>
												Специалист в области имплантации <br /> и протезирования
												на имплантах
											</h3>
										</div>

										<h1 className=' font-normal my-5 text-sm'>
											{content.description}
										</h1>
										<Link
											to={`/doctors/${content.id}`}
											onClick={() => {
												window.scrollTo(0, 0)
											}}
											className='bg-[#2CB2BB] hover:bg-white font-medium rounded-sm py-3 text-white  hover:text-[#2CB2BB] dark:text-black hover:scale-110 duration-200 my-3'
										>
											<span className='relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0'>
												Подробнее о враче
											</span>
										</Link>
									</div>
									<div className=' h-[436px] flex items-end mt-7 ml-11'>
										<img
											className='h-[436px] object-cover'
											src={
												'https://akmatovt.pythonanywhere.com/media/' +
												content.image1_png
											}
											alt='img'
										/>
									</div>
								</div>
							</div>
						))}
					</Slider>

					<div
						className='flex justify-between'
						style={{ textAlign: 'center', marginTop: '20px' }}
					>
						{data?.map((content, index) => (
							<span
								data-aos='fade-up'
								data-aos-duration={index * 800}
								className=' focus:bg-[#2CB2BB] text-[#2CB2BB] text-sm capitalize text-left flex items-center w-[284px] h-[104px] rounded-lg px-6'
								key={index}
								onClick={() => handleTitleClick(index)}
								style={{
									cursor: 'pointer',
									marginRight: '10px',
									fontWeight: currentSlide === index ? 'bold' : 'normal',
									color: currentSlide === index ? 'white' : '#2CB2BB',
									background: currentSlide === index ? '#2CB2BB' : '#F2FAFB'
								}}
							>
								<div className=''>
									<img
										className='h-[64px] mr-3 object-cover'
										src={
											'https://akmatovt.pythonanywhere.com/media/' +
											content.image1_png
										}
										alt=''
									/>
								</div>
								<div className='flex flex-col items-start'>
									<span>
										{content.firstName.toLowerCase()} <br />
									</span>
									<span>
										{content.lastName.toLowerCase()} <br />
									</span>
									<span>{content.sureName.toLowerCase()}</span>
								</div>
							</span>
						))}
					</div>
				</div>
			</div>
		)
	)
}

export default OurDoctors
