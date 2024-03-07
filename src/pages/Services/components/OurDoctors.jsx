import { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'
import { NavLink } from 'react-router-dom'
import { GrFormNextLink } from 'react-icons/gr'

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

	const handlePrevSlide = () => {
		sliderRef.current.slickPrev()
	}

	const handleNextSlide = () => {
		sliderRef.current.slickNext()
	}

	const slidesContent = [
		{
			title: 'Лушанина Анна Сергеевна',
			des: 'Стоматолог-имплантолог, стоматолог-хирург, опыт 13 лет',
			description:
				'Выполняет все виды протезирования и имплантации. Берётся за тяжёлые случаи и достигает идеального результата. Специализируется на сложном ортопедическом лечении.',
			img: 'https://s3-alpha-sig.figma.com/img/1d26/3dd7/71436479d455d54edbe632a60d3aa5d3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pDsv6Ive6KCS-~necCr9GgwJiSJTlOUg2bc98yGt48SKlPYRdahptocIROUIdneFohySYDE7ubDH4yGQ5bNkTZ7bHgBRX7tzcMVv~jdIjmbfyQL2s7r1-GIjK2RLTNngqqUZmNvUUckl-nZLRFKIHKdoJkozqVVJY8fpcwHWsj7yvLvDx4rIt38AqWEjZQD9yXdd209UXJNpSe3cE4SZlQ3UnBFfspSCyS8BgjdeZQWYyeUYqDKG6ZK0H~9A527ZDRUpjpNQNDxSafJEHHHTEOcA4Dr2hrk39-OQYinV9NnoqodSFT3Ye-j9KDtNRSTnNh3ZUohJf7zT0jt9OpkORg__'
		},
		{
			title: 'Певчик Анатолий Сергеевич',
			des: 'Стоматолог-имплантолог, стоматолог-хирург, опыт 13 лет',
			description:
				'Выполняет все виды протезирования и имплантации. Берётся за тяжёлые случаи и достигает идеального результата. Специализируется на сложном ортопедическом лечении.',
			img: 'https://s3-alpha-sig.figma.com/img/4d0e/a76f/dde3bafc1c89526e8c5edd078c28ab7e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XwTZR4EZ72Q6s0e~yKc4oEUvomwLd5wwKDUfoQDnh-oygAEPiDWB8gd9KTz849YDOrQ1B7o7fWzpD-4UVDciDrKGnrC8gqhmc6jeE~LS7T2M1TGpntXPc0heUwwlmJ5qRvY3NENnxoBFGe6JygIWkOWpYf1L1pEPUEaJgkJellXf5Wsr4705c4nbxsGTB-Q7S8rJvPnm3a9npIqW~DEKYbzfEW~xd2knItsNuFHLZEaFDp~hlie3rhuDZOm9D6cXdwW4cuX2~kzXHjY589lG9FH1lY6a7olASC7vIsK09CarFJhBxFWZMuGfBbYPM4QZW1kDcnuJQz0s3IvJwarq3w__'
		},
		{
			title: 'Антипина Ирина Иванова',
			des: 'Стоматолог-имплантолог, стоматолог-хирург, опыт 13 лет',
			description:
				'Выполняет все виды протезирования и имплантации. Берётся за тяжёлые случаи и достигает идеального результата. Специализируется на сложном ортопедическом лечении.',
			img: 'https://s3-alpha-sig.figma.com/img/553f/824d/57b7a55363a1012d543c317e50bdac6f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PpNM4XZbs31lk38VVzSIOAhJfalNzSrrS-BxIxMnGCDbrVzZKmdorJpp6-SLoht9ObntUOio8kPncocyDih1nFvZeLbi6f~WdDBkS~ENLwfJqezDyU66OT8RNuGuRulvvIc7AjwFf11WYo4TItazNtH3nUpblqPPmP4AZUXa5fpFVR5EtdCfIXiYZSVeZdnXFVAkrJlDJ00el2OsbPnotjvIjD39378K1K7WjfLH3glFx16iZXtcncDKMyFHhPLhgp1Si~F4TRsUZzHt6isaO~wY8BpCavwKp2Yw3U3UdLeWtNuCtMes0YACr0HrIH3EHKuUHH-TFqr27qcsbsw7Jw__'
		},
		{
			title: 'Зубов Антон Петров',
			des: 'Стоматолог-имплантолог, стоматолог-хирург, опыт 13 лет',
			description:
				'Выполняет все виды протезирования и имплантации. Берётся за тяжёлые случаи и достигает идеального результата. Специализируется на сложном ортопедическом лечении.',
			img: 'https://s3-alpha-sig.figma.com/img/39ea/1a31/1cb867eb0699df516fa3ec69f390fed3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WplfkgKtBEAwqJZHIOSSmTNDtKSAloYZvIY6jAGwJCfHVlSweJv7Xea73bdd7A442TmC98Rxz99kPIQfCAkByFIh2b54sJjAtFcpv95AF3DLTuolTQyKZaJBmI~uO5DYKXcUmjDUBHS0Xc~qJOpr92b~97z6dA417FK62iRVJUHFeVGNPwA1SVTKLFsYBje2h8zpCyiI-48Z2-YFX01lfQ9-d~iIPvq4eUNRgRi~IW97tZI8N0D4KzMCeEWPXOEt4~ENx~E1kQK9YA-0RLvmfJAQ0qI~PM683IcwM2RN1dwnCbK0Jee9nf~fs2sUCCLticRKkfEuqNuja~XRsWi0rA__'
		}
	]
	const { width } = useWindowSize()

	return (
		width > 841 && (
			<div className='container'>
				<div className='flex items-center justify-between'>
					<h1 className=' text-[#253F41] text-2xl font-bold'>Наши врачи</h1>
					<NavLink
						to={'/doctors'}
						className='flex items-center gap-2 text-[#2CB2BB] font-bold text-sm'
					>
						Все врачи <GrFormNextLink />
					</NavLink>
				</div>
				<div className='relative my-11'>
					{/* Слайдер */}
					<Slider {...sliderSettings} ref={sliderRef}>
						{slidesContent.map((content, index) => (
							<div
								data-aos='zoom-in'
								className='w-full h-[464px] bg-[#F2FAFB] flex items-center justify justify-between px-11'
								key={index}
							>
								<div className='flex items-end justify-between px-11'>
									<div className='w-[528px] pb-20'>
										<h1
											data-aos='zoom-in'
											data-aos-duration={300}
											className='text-2xl text-black font-bold'
										>
											{content.title}
										</h1>
										<h1
											data-aos='zoom-in'
											data-aos-duration={600}
											className='text-[12px] my-4  font-medium text-[#97A6A7]'
										>
											{content.des}
										</h1>

										<div
											data-aos='zoom-in'
											data-aos-duration={600}
											className='flex items-center gap-4'
										>
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
													stroke-width='1.5'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
											</svg>
											<h3 className='text-sm text-[#2CB2BB]'>
												Специалист в области имплантации <br /> и протезирования
												на имплантах
											</h3>
										</div>

										<h1
											data-aos='zoom-in'
											data-aos-duration={900}
											className=' font-normal my-5 text-sm'
										>
											{content.description}
										</h1>
										<button
											data-aos='zoom-in'
											data-aos-duration={1200}
											className='bg-[#2CB2BB] hover:bg-white font-medium rounded-sm py-3 text-white  hover:text-[#2CB2BB] dark:text-black hover:scale-110 duration-200 my-3'
										>
											<span className='relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0'>
												Подробнее о враче
											</span>
										</button>
									</div>
									<div className=' h-[436px] flex items-end mt-7 ml-11'>
										<img
											className='h-[436px] object-cover'
											src={content.img}
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
						{slidesContent.map((content, index) => (
							<span
								data-aos='fade-up'
								data-aos-duration={index * 800}
								className=' focus:bg-[#2CB2BB] text-[#2CB2BB] text-sm flex items-center w-[284px] h-[104px] rounded-lg px-6'
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
										src={content.img}
										alt=''
									/>
								</div>
								{content.title}
							</span>
						))}
					</div>

					<div
						className='flex gap-2 absolute right-5 bottom-16'
						style={{ textAlign: 'center', marginTop: '20px' }}
					>
						{/* <button className='mb-[200px]' onClick={handleNextSlide}>
							<div className='btn-conteiner'>
								<a href='#' className='btn-content content2'>
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
						</button> */}
					</div>
				</div>
			</div>
		)
	)
}

export default OurDoctors

/////////////////////////////////////////AZIRET 1
