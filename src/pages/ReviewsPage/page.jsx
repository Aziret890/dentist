import * as React from 'react'
import ReviewTab from './components/ReviewTab'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { useEffect } from 'react'
import Rating from '../../widgets/common/Rating'
import Social from '../../widgets/common/Social'
import Reviews from '../../widgets/common/Reviews'
import styles from './page.module.scss'
import { IoSearchOutline } from 'react-icons/io5'
import ReviewStartContent from './components/ReviewStartContent'
import InterviewsWithPatients from './components/InterviewsWithPatients'

export default function ReviewsPage() {
	const location = useLocation().search
	const searchParams = new URLSearchParams(location)
	const tabIndex = +searchParams.get('tabIndex')

	const [reviewPageIndex, setReviewPageIndex] = React.useState(+tabIndex)
	useEffect(() => {
		setReviewPageIndex(+tabIndex)
	}, [tabIndex])

	return (
		<main>
			<div
				className={clsx(
					`w-full h-[52px] opacity-60 pt-3 text-white bg-[#2CB2BB]`
				)}
			>
				<div className='container'>Отзывы</div>
			</div>
			<div className=''>
				<ReviewStartContent />
				<ReviewTab
					reviewPageIndex={reviewPageIndex}
					setReviewPageIndex={setReviewPageIndex}
				/>
				<Rating />
				<InterviewsWithPatients />
				<Social />
				<Reviews>
					<div className=''>
						<h1
							className='text-2xl font-bold'
							data-aos='fade-up'
							data-aos-duration={1 * 300}
						>
							Отзывы пациентов
						</h1>
						<div className={styles.search}>
							<div className={styles['input-box']}>
								<label htmlFor='search'>Врачи</label>
								<input
									type='text'
									name='search'
									placeholder='Поиск по врачу...'
									id='search'
								/>
							</div>
							<button>
								<IoSearchOutline />
							</button>
						</div>
					</div>
				</Reviews>
			</div>
		</main>
	)
}
