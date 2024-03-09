import React from 'react'
import styles from '../page.module.scss'
import Men from './men.svg'
import Magnifier from '../../../features/Magnifier'

export default function FreeConsultationContent() {
	return (
		<section className='mt-40'>
			<div className={`container ${styles['consultation-content']}`}>
				<div className={styles.left}>
					<h2>Бесплатная дистанционная консультация</h2>
					<h4>
						Следуйте инструкциям ниже для подачи заявки на консультацию врача
					</h4>
				</div>
				<div className={styles.right}>
					<img src={Men} alt='' />
				</div>
				<svg
					width='582'
					height='290'
					viewBox='0 0 582 290'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						opacity='0.1'
						d='M291 0C130.285 0 0 129.837 0 290H582C582 129.837 451.715 0 291 0Z'
						fill='white'
					/>
				</svg>
			</div>
		</section>
	)
}
