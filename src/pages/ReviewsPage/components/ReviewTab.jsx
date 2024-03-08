/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styles from '../page.module.scss'
import clsx from 'clsx'
import gsap from 'gsap'

export default function ReviewTab({ reviewPageIndex }) {
	async function onClick(index) {
		gsap.to(window, {
			duration: 0.5,
			scrollTo: { y: '#section' + index, offsetY: index === 0 ? 110 : 40 },
			// ease: 'expo'
			ease: 'power3'
		})
	}

	return (
		<div className={styles['review-tab']}>
			<div className='container'>
				<Link
					to={'/reviews'}
					className={clsx({
						[styles.actives]: !reviewPageIndex
					})}
					onClick={() => onClick(1)}
				>
					Независимый рейтинг
				</Link>
				<Link
					className={clsx({
						[styles.actives]: +reviewPageIndex === 2
					})}
					to='/reviews?tabIndex=2'
					onClick={() => onClick(2)}
				>
					Интервью с пациентами
				</Link>
				<Link
					className={clsx({
						[styles.actives]: +reviewPageIndex === 3
					})}
					to='/reviews?tabIndex=3'
					onClick={() => onClick(2)}
				>
					Отзывы в социальных сетях
				</Link>
				<Link
					className={clsx({
						[styles.actives]: +reviewPageIndex === 4
					})}
					to='/reviews?tabIndex=4'
					onClick={() => onClick(3)}
				>
					Отзывы пациентов
				</Link>
			</div>
		</div>
	)
}
