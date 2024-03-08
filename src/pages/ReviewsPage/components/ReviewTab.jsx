/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import styles from '../page.module.scss'
import clsx from 'clsx'

export default function ReviewTab({ reviewPageIndex }) {
	return (
		<div className={styles['review-tab']}>
			<div className='container'>
				<Link
					to={'/reviews'}
					className={clsx({
						[styles.actives]: !reviewPageIndex
					})}
				>
					Независимый рейтинг
				</Link>
				<Link
					className={clsx({
						[styles.actives]: +reviewPageIndex === 2
					})}
					to='/reviews?tabIndex=2'
				>
					Интервью с пациентами
				</Link>
				<Link
					className={clsx({
						[styles.actives]: +reviewPageIndex === 3
					})}
					to='/reviews?tabIndex=3'
				>
					Отзывы в социальных сетях
				</Link>
				<Link
					className={clsx({
						[styles.actives]: +reviewPageIndex === 4
					})}
					to='/reviews?tabIndex=3'
				>
					Отзывы пациентов
				</Link>
			</div>
		</div>
	)
}
