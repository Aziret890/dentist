import './Social.scss'
import user from '../../../shared/assets/images/uset-social.svg'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'
import { RiFacebookBoxLine } from 'react-icons/ri'
import { CiYoutube } from 'react-icons/ci'
import { LiaOdnoklassnikiSquare } from 'react-icons/lia'
import like from '../../../shared/assets/images/like-svg.svg'
import post1 from '../../../shared/assets/images/like-post.png'
import post2 from '../../../shared/assets/images/like-post1.png'
import post3 from '../../../shared/assets/images/like-post2.png'
import post4 from '../../../shared/assets/images/like-post3.png'
import SoicalDetal from './SoicalDetal'

import { Keyboard, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Social() {
	const dataObj = [
		{ img: post2, count: 40 },
		{ img: post2, count: 40 },
		{ img: post2, count: 40 },
		{ img: post2, count: 40 },
		{ img: post2, count: 40 },
		{ img: post1, count: 125 },
		{ img: post3, count: 49 },
		{ img: post4, count: 32 },
		{ img: post4, count: 32 }
	]
	return (
		<section className='social__section' id='section2'>
			<div className='container'>
				<div className='social__block1'>
					<div className='social__block1-title'>
						<h1 data-aos='fade-up' data-aos-duration={300}>
							Мы в социальных сетях
						</h1>
						<p data-aos='fade-up' data-aos-duration={800}>
							Подписывайтесь на наши аккаунты, следите за выгодными
							предложениями и задавайте вопросы. Мы всегда рады новым
							знакомствам. Наш хэштэг <span>#названиеклиники</span>
						</p>
						<div className='social__block'>
							<div className='social__block-child 440:mt-8 mt-14 flex justify-between'>
								<div
									data-aos='fade-up'
									data-aos-duration={1 * 300}
									className='block-child-svg flex items-center gap-4'
								>
									<div className='block-child-left'>
										<AiOutlineInstagram color='#fff' fontSize={55} />
									</div>
									<div className='flex-col'>
										<p>
											<a href='https://www.instagram.com/motion_web'>
												Instagram
											</a>
										</p>
										<p className='flex '>
											<img src={user} alt='' /> <span>4 560</span>
										</p>
									</div>
								</div>
								<div
									data-aos='fade-up'
									data-aos-duration={2 * 300}
									className='block-child-svg flex items-center gap-4'
								>
									<div className='block-child-left'>
										<SlSocialVkontakte color='#fff' fontSize={55} />
									</div>
									<div className='flex-col'>
										<p>вконтакте</p>
										<p className='flex'>
											<img src={user} alt='' /> <span>4 560</span>
										</p>
									</div>
								</div>
								<div
									data-aos='fade-up'
									data-aos-duration={3 * 300}
									className='block-child-svg flex items-center gap-4'
								>
									<div className='block-child-left'>
										<RiFacebookBoxLine color='#fff' fontSize={55} />
									</div>
									<div className='flex-col'>
										<p>Facebook</p>
										<p className='flex '>
											<img src={user} alt='' /> <span>4 560</span>
										</p>
									</div>
								</div>
								<div
									data-aos='fade-up'
									data-aos-duration={4 * 300}
									className='block-child-svg flex items-center gap-4'
								>
									<div className='block-child-left'>
										<CiYoutube color='#fff' fontSize={55} />
									</div>
									<div className='flex-col'>
										<p>Youtube</p>
										<p className='flex '>
											<img src={user} alt='' /> <span>4560</span>
										</p>
									</div>
								</div>
								<div
									data-aos='fade-up'
									data-aos-duration={5 * 300}
									className='block-child-svg flex items-center gap-4'
								>
									<div className='block-child-left'>
										<LiaOdnoklassnikiSquare color='#fff' fontSize={55} />
									</div>
									<div className='flex-col'>
										<p>Одноклассники</p>
										<p className='flex '>
											<img src={user} alt='' /> <span>4 560</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='dfdf'>
					<Swiper
						modules={[Keyboard, Autoplay]}
						keyboard
						autoplay={{ delay: 2000 }}
						spaceBetween={1}
						slidesPerView={'auto'}
						className='social__block2 flex items-start gap-4'
					>
						{dataObj.map((el, ind) => (
							<SwiperSlide key={ind}>
								<SoicalDetal like={like} ind={ind} el={el} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Social
