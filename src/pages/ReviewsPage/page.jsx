import * as React from 'react'
import ReviewTab from './components/ReviewTab'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { useEffect } from 'react'

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
				<div className='mt-20 h-[50vh]'>
					<div className='container'>Content</div>
				</div>
				<ReviewTab
					reviewPageIndex={reviewPageIndex}
					setReviewPageIndex={setReviewPageIndex}
				/>
			</div>
		</main>
	)
}
