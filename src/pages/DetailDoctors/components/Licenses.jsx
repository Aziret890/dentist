/* eslint-disable react/prop-types */
import clsx from 'clsx'
import styles from '../page.module.scss'
import { Pagination, Keyboard } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

export default function Licenses({ doc }) {
	const { licenses } = doc
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
				{licenses &&
					licenses.map((item, idx) => (
						<SwiperSlide data-aos='fade-up' data-aos-duration={idx * 500} key={idx}>
							<li>
								<div className={styles['licenses-image']}>
									<img src={item.photo} alt='' />
								</div>
								<h4>{item.text}</h4>
							</li>
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	)
}
