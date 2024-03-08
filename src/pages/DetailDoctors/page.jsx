import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import clsx from 'clsx'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AboutDocTabs from './components/AboutDocTabs'
import Articles from './components/Articles'
import Characteristics from './components/Characteristics '
import Education from './components/Education'
import ExamplesOfWork from './components/ExamplesOfWork'
import HomeDetailDoctors from './components/HomeDetailDoctors'
import HonestReviewsDoc from './components/HonestReviewsDoc'
import Licenses from './components/Licenses'
import TypeOfActivity from './components/TypeOfActivity'
import styles from './page.module.scss'
import './page.scss'

export default function DetailDoctors() {
	const { docId } = useParams()
	const [tab, setTab] = useState('Вид деятельности')

	async function getDetailDoctor() {
		try {
			const { data } = await axios(
				`https://akmatovt.pythonanywhere.com/doctor/${docId}/`
			)

			document.title = data.firstName

			return data
		} catch (error) {
			console.log('doc detail [err]', error)
		}
	}

	const { data } = useQuery({
		queryKey: ['detail-doctors', docId],
		queryFn: async () => await getDetailDoctor(docId),
		retry: 3000,
		refetchInterval: 2000
	})

	return (
		<main className={styles['detail-doc']}>
			<div
				className={clsx(`${styles['start']} w-full h-[52px] opacity-60 pt-3 `)}
			>
				<div className='container flex items-center gap-3 text-[#2CB2BB] text-sm'>
					<Link to='/doctors'>Врачи</Link>
					<div className={styles.dot}></div>
					<span>{data?.firstName}</span>
				</div>
			</div>
			<HomeDetailDoctors doc={data} />
			<AboutDocTabs tab={tab} setTab={setTab} />
			<div className={`container pt-10 ${styles['doc-about']}`}>
				<TypeOfActivity doc={data} />
				<Characteristics id={docId} doc={data} />
				<Education doc={data} />
				<Licenses doc={data} />
				<HonestReviewsDoc id={docId} doc={data} />
				<ExamplesOfWork id={docId} doc={data} />
				{/* <Photos doc={findDoc} /> */}
				<Articles id={docId} doc={data} />
			</div>
		</main>
	)
}
