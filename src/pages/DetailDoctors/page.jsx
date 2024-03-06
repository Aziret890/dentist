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

export default function DetailDoctors() {
	const { docId } = useParams()
	const [tab, setTab] = useState('Вид деятельности')
	const findDoc = docArr.find(item => item.id.toString() === docId)

	return (
		<main className={styles['detail-doc']}>
			<div
				className={clsx(`${styles['start']} w-full h-[52px] opacity-60 pt-3 `)}
			>
				<div className='container flex items-center gap-3 text-[#2CB2BB] text-sm'>
					<Link to='/doctors'>Врачи</Link>
					<div className={styles.dot}></div>
					<span>{findDoc.name}</span>
				</div>
			</div>
			<HomeDetailDoctors doc={findDoc} />
			<AboutDocTabs tab={tab} setTab={setTab} />
			<div className={`container pt-10 ${styles['doc-about']}`}>
				<TypeOfActivity doc={findDoc} />
				<Characteristics doc={findDoc} />
				<Education doc={findDoc} />
				<Licenses doc={findDoc} />
				<HonestReviewsDoc doc={findDoc} />
				<ExamplesOfWork doc={findDoc} />
				<Photos doc={findDoc} />
				<Articles doc={findDoc} />
			</div>
		</main>
	)
}
