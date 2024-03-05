import { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './teeth.css'

const Teeth = () => {
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

	const handlePrevSlide = () => {
		sliderRef.current.slickPrev()
	}

	const handleNextSlide = () => {
		sliderRef.current.slickNext()
	}

	const slidesContent = [
		{
			title: 'Имплантация зубов',
			price: 'от 18 000 ₽',
			description: 'По новой прогрессивной методике'
		},
		{
			title: 'Сертификаты со скидкой',
			price: 'от 18 000 ₽',
			description: 'По новой прогрессивной методике'
		},
		{
			title: 'Новые услуги',
			price: 'от 18 000 ₽',
			description: 'По новой прогрессивной методике'
		},
		{
			title: 'Бесплатная консультация',
			price: 'от 18 000 ₽',
			description: 'По новой прогрессивной методике'
		}
	]

	return (
		<div className='container'>
			<div className='relative my-11'>
				{/* Слайдер */}
				<Slider {...sliderSettings} ref={sliderRef}>
					{slidesContent.map((content, index) => (
						<div
							className='w-full h-[392px] bg-[#2CB2BB] flex items-center justify justify-between px-11'
							key={index}
						>
							<div className='flex items-center justify-between px-[60px]'>
								<div className=''>
									<h1 className='text-4xl text-white font-bold'>
										{content.title}
									</h1>
									<h1 className='text-2xl my-4 text-white font-bold'>
										{content.price}
									</h1>
									<h1 className=' font-normal my-3 text-white'>
										{content.description}
									</h1>
									<button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500  group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white hover:scale-110 duration-200 my-7'>
										<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
											Узнать подробнее
										</span>
									</button>
								</div>
								<img
									className='pr-24'
									src='https://s3-alpha-sig.figma.com/img/14bf/cf0a/7fef31556f8b8063812802f6af78dc66?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qZAL06VEjWCDvnAVOe1vcGvPvhrNYoik~0vAbL9ekPGxV19qqy0aSdyEkgoOFGuhEyi6U7xn5vDXt444PyR9Eu2mGOolmGZzdjVhILrfBHATXG47AOXoX6ilAY6GMOy1Pjz1md0X4ZKcUnru8FUPqII6ybwdn~Ixc-K2ISSLo4TKqwrkLsdRUiGSIgULmwD3PYTNn7DrtjGGa6adP8yWYM-CJLFeH30JZk18raBGaaCwB0VRa6kmlpnjVbT83oavfaDHkTkVrzxB8xW~Iu8VO8B5UyHlWaMS4L3rmgXMNRvy67nkq4aM3SURAtK24D1H25367DmpIKnQhZTWUL2qnQ__'
									alt='img'
								/>
							</div>
						</div>
					))}
				</Slider>

				<div
					className='flex justify-between px-11 '
					style={{ textAlign: 'center', marginTop: '20px' }}
				>
					{slidesContent.map((content, index) => (
						<span
							className='hover:border-b-2 border-[#2CB2BB] text-[#2CB2BB]'
							key={index}
							onClick={() => handleTitleClick(index)}
							style={{
								cursor: 'pointer',
								marginRight: '10px',
								fontWeight: currentSlide === index ? 'bold' : 'normal',
								color: currentSlide === index ? 'black' : '#2CB2BB',
								borderBottom:
									currentSlide === index ? '2px solid black' : 'none'
							}}
						>
							{content.title}
						</span>
					))}
				</div>

				<div
					className='flex gap-2 absolute right-5 bottom-16'
					style={{ textAlign: 'center', marginTop: '20px' }}
				>
					<button onClick={handlePrevSlide}>
						<div className='btn-container bg-gray-400 rounded-full'>
							<a href='#' className='btn-content'>
								<span className='icon-arrow'>
									<svg
										xmlnsXlink='http://www.w3.org/1999/xlink'
										xmlns='http://www.w3.org/2000/svg'
										version='1.1'
										viewBox='0 0 66 43'
										height='30px'
										width='30px'
									>
										<g
											fillRule='evenodd'
											fill='none'
											strokeWidth='1'
											stroke='none'
											id='arrow'
										>
											<path
												fill='#9ee5fa'
												d='M65.8456067,3.89485454 L62.0236851,0.139296592 C61.8291689,-0.0518420739 61.5173671,-0.0518571125 61.3228325,0.139262789 L40.3083866,20.7848311 C39.9144199,21.1718824 39.9088137,21.8050225 40.295865,22.1989893 C40.2999812,22.2031791 40.3041343,22.2073326 40.3083238,22.2114492 L61.322902,42.8607841 C61.5174043,43.0519059 61.8291758,43.0519358 62.0237147,42.8608513 L65.8454814,39.1069479 C66.0424848,38.9134427 66.0453207,38.5968729 65.8518155,38.3998695 C65.8497107,38.3977268 65.8475868,38.395603 65.8454438,38.3934985 L49.0062211,21.8567812 C48.8091972,21.6632968 48.806328,21.3467273 48.9998124,21.1497035 C49.0019353,21.1475418 49.0040777,21.1453995 49.0062395,21.1432767 L65.8454792,4.60825197 C66.0425131,4.41477773 66.0453987,4.09820839 65.8519244,3.90117456 C65.8498374,3.89904911 65.8477314,3.89694235 65.8456067,3.89485454 Z'
												id='arrow-icon-one'
											></path>
											<path
												fill='#9ee5fa'
												d='M45.8456067,3.89485454 L42.0236851,0.139296592 C41.8291689,-0.0518420739 41.5173671,-0.0518571125 41.3228325,0.139262789 L20.3083866,20.7848311 C19.9144199,21.1718824 19.9088137,21.8050225 20.295865,22.1989893 C20.2999812,22.2031791 20.3041343,22.2073326 20.3083238,22.2114492 L41.322902,42.8607841 C41.5174043,43.0519059 41.8291758,43.0519358 42.0237147,42.8608513 L45.8454814,39.1069479 C46.0424848,38.9134427 46.0453207,38.5968729 45.8518155,38.3998695 C45.8497107,38.3977268 45.8475868,38.395603 45.8454438,38.3934985 L29.0062211,21.8567812 C28.8091972,21.6632968 28.806328,21.3467273 28.9998124,21.1497035 C29.0019353,21.1475418 29.0040777,21.1453995 29.0062395,21.1432767 L45.8454792,4.60825197 C46.0425131,4.41477773 46.0453987,4.09820839 45.8519244,3.90117456 C45.8498374,3.89904911 45.8477314,3.89694235 45.8456067,3.89485454 Z'
												id='arrow-icon-two'
											></path>
											<path
												fill='#9ee5fa'
												d='M25.8456067,3.89485454 L22.0236851,0.139296592 C21.8291689,-0.0518420739 21.5173671,-0.0518571125 21.3228325,0.139262789 L0.308386597,20.7848311 C-0.0855799173,21.1718824 -0.0911863411,21.8050225 0.295864965,22.1989893 C0.299981192,22.2031791 0.304134276,22.2073326 0.308323781,22.2114492 L21.322902,42.8607841 C21.5174043,43.0519059 21.8291758,43.0519358 22.0237147,42.8608513 L25.8454814,39.1069479 C26.0424848,38.9134427 26.0453207,38.5968729 25.8518155,38.3998695 C25.8497107,38.3977268 25.8475868,38.395603 25.8454438,38.3934985 L9.00622113,21.8567812 C8.8091972,21.6632968 8.80632801,21.3467273 8.99981244,21.1497035 C9.00193534,21.1475418 9.00407775,21.1453995 9.00623955,21.1432767 L25.8454792,4.60825197 C26.0425131,4.41477773 26.0453987,4.09820839 25.8519244,3.90117456 C25.8498374,3.89904911 25.8477314,3.89694235 25.8456067,3.89485454 Z'
												id='arrow-icon-three'
											></path>
										</g>
									</svg>
								</span>
							</a>
						</div>
					</button>

					<button onClick={handleNextSlide}>
						<div className='btn-conteiner'>
							<a href='#' className='btn-content'>
								<span className='icon-arrow'>
									<svg
										xmlnsXlink='http://www.w3.org/1999/xlink'
										xmlns='http://www.w3.org/2000/svg'
										version='1.1'
										viewBox='0 0 66 43'
										height='30px'
										width='30px'
									>
										<g
											fillRule='evenodd'
											fill='none'
											strokeWidth='1'
											stroke='none'
											id='arrow'
										>
											<path
												fill='#9ee5fa'
												d='M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z'
												id='arrow-icon-one'
											></path>
											<path
												fill='#9ee5fa'
												d='M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z'
												id='arrow-icon-two'
											></path>
											<path
												fill='#9ee5fa'
												d='M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z'
												id='arrow-icon-three'
											></path>
										</g>
									</svg>
								</span>
							</a>
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Teeth

/////////////////////////////////////////AZIRET 1
