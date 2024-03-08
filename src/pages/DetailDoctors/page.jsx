import clsx from 'clsx'
import styles from './page.module.scss'
import './page.scss'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { docArr } from '../../entity/const/doc.const'
import HomeDetailDoctors from './components/HomeDetailDoctors'
import { useState } from 'react'
import AboutDocTabs from './components/AboutDocTabs'
import TypeOfActivity from './components/TypeOfActivity'
import Characteristics from './components/Characteristics '
import Education from './components/Education'
import Licenses from './components/Licenses'
import ExamplesOfWork from './components/ExamplesOfWork'
import Photos from './components/Photos'
import Articles from './components/Articles'
import HonestReviewsDoc from './components/HonestReviewsDoc'
import { useDoc } from '../../app/context/DoctorsContext'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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
		queryFn: async () => await getDetailDoctor(docId)
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
				<HonestReviewsDoc doc={data} />
				{/* <ExamplesOfWork doc={data} /> */}
				{/* <Photos doc={findDoc} /> */}
				{/* <Articles doc={findDoc} /> */}
			</div>
		</main>
	)
}
