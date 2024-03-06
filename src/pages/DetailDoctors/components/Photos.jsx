/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from '../page.module.scss'
import { Keyboard, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import useOutsideClick from '../../../entity/hooks/useOutsideClick'
import { useRef } from 'react'

export default function Photos({ doc }) {
	const [viewImage, setViewImage] = useState(null)
	const { photos } = doc
	const ref = useRef(null)

	useOutsideClick(() => {
		setViewImage(null)
	}, ref)
	return (
		<section id='section5' className='mb-20'>
			<h1 data-aos='fade-up'>Врач в работе</h1>
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
						<SwiperSlide
							data-aos='fade-up'
							data-aos-duration={idx * 500}
							className={styles['photo_slide']}
							key={idx}
						>
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
						</SwiperSlide>
					))}
			</Swiper>
			<div
				className={clsx(styles.view_image, {
					[styles.active]: viewImage !== null
				})}
				ref={ref}
			>
				{viewImage !== null && <img src={viewImage} alt='image' />}
			</div>
		</section>
	)
}
