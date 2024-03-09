/* eslint-disable react/prop-types */
import clsx from 'clsx'
import { Keyboard, Pagination, Navigation } from 'swiper/modules'
import styles from '../page.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import { useRef } from 'react'
import useOutsideClick from '../../../entity/hooks/useOutsideClick'
import { useKeyDown } from '../../../entity/hooks/useKeyDown'

export default function Licenses({ doc }) {
	const [certificateId, setCertificateId] = useState(null)
	const outSideRef = useRef()

	useOutsideClick(() => {
		setCertificateId(null)
	}, outSideRef)

	useKeyDown('Escape', () => {
		setCertificateId(null)
	})

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
							<li
								onClick={() => setCertificateId(idx)}
								data-aos='fade-up'
								data-aos-duration={idx * 500}
							>
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

			<div
				className={clsx(styles.certificate__modal, {
					[styles.active]: certificateId !== null
				})}
			>
				<div className={`container ${styles.modal__body}`}>
					<Swiper
						ref={outSideRef}
						modules={[Keyboard, Navigation]}
						spaceBetween={0}
						slidesPerView={1}
						keyboard
						navigation
						className={clsx(`${styles['licenses-content']} licenses-content`, {
							[styles.modal]: certificateId !== null
						})}
					>
						{doc?.certificate &&
							doc?.certificate?.map((item, idx) => (
								<SwiperSlide key={idx}>
									<li data-aos='fade-up' data-aos-duration={idx * 500}>
										<div
											className={clsx(styles['licenses-image'], {
												[styles.modal]: certificateId !== null
											})}
										>
											<img
												src={
													'https://akmatovt.pythonanywhere.com/media/' +
													item.image
												}
												alt=''
											/>
										</div>
										<h4>{item.title}</h4>
									</li>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}
