import clsx from 'clsx'
import { useDoc } from '../../../app/context/DoctorsContext'
import styles from '../page.module.scss'
import DocCard from './ui/DocCard'

export default function DoctorResult() {
	const { filteredDoc } = useDoc()

	return (
		<div className={styles.result}>
			{filteredDoc.length !== 0 ? (
				filteredDoc.map((item, idx) => (
					<DocCard key={idx} idx={idx} styles={styles} item={item} />
				))
			) : (
				<div
					className={clsx(
						`${styles['not-result']} flex items-center py-3 justify-center`
					)}
				>
					<h3>No result</h3>
				</div>
			)}
		</div>
	)
}
