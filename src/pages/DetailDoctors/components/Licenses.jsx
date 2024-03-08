/* eslint-disable react/prop-types */
import clsx from 'clsx'
import styles from '../page.module.scss'
import { Pagination, Keyboard } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

export default function Licenses({ doc }) {
	return (
		<section id='section3' className='mb-20'>
			<h1 data-aos='fade-up'>Лицензии и сертификаты врача</h1>
			<Swiper
				modules={[Keyboard, Pagination]}
				spaceBetween={10}
				slidesPerView={4}
				keyboard
				pagination={{ clickable: true }}
				className={clsx(`${styles['licenses-content']} licenses-content`)}
			>
				{doc?.certificate &&
					doc?.certificate?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<li data-aos='fade-up' data-aos-duration={idx * 500}>
								<div className={styles['licenses-image']}>
									<img
										src={
											'https://akmatovt.pythonanywhere.com/media/' + item.image
										}
										alt=''
									/>
								</div>
								<h4>{item.title}</h4>
							</li>
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	)
}
