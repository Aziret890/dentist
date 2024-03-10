/* eslint-disable react/prop-types */
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { Keyboard, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import useOutsideClick from '../../../entity/hooks/useOutsideClick'
import styles from './photos.module.scss'
import { useKeyDown } from '../../../entity/hooks/useKeyDown'

export default function Photos({ photos }) {
	const [viewImage, setViewImage] = useState(null)
	const outSideRef = useRef(null)

	useOutsideClick(() => {
		setViewImage(null)
	}, outSideRef)
	useKeyDown('Escape', () => setViewImage(null))

	return (
		<section id='section5' className='container mb-20'>
			<h1
				// data-aos='fade-up'
				className='text-3xl font-bold my-11 text-[#253F41]'
			>
				Фотографии клиники
			</h1>

			<Swiper
				modules={[Pagination, Keyboard]}
				keyboard
				spaceBetween={20}
				slidesPerView={4}
				pagination={{ clickable: true }}
				className={styles['photo-content']}
			>
				{photos &&
					photos.map((item, idx) => (
						<SwiperSlide className={styles['photo_slide']} key={idx}>
							<li data-aos='fade-up' data-aos-duration={idx * 500}>
								<img src={item} alt='' />
								<button
									onClick={() => setViewImage(item)}
									className={styles.views}
								>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
											stroke='#2CB2BB'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M21.0004 21.0004L16.6504 16.6504'
											stroke='#2CB2BB'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M11 8V14'
											stroke='#2CB2BB'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M8 11H14'
											stroke='#2CB2BB'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</button>
							</li>
						</SwiperSlide>
					))}
			</Swiper>
			<div
				className={clsx(styles.view_image, {
					[styles.active]: viewImage !== null
				})}
				ref={outSideRef}
			>
				{viewImage !== null && <img src={viewImage} alt='image' />}
			</div>
		</section>
	)
}
