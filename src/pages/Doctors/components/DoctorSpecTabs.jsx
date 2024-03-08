import clsx from 'clsx'
import { useDoc } from '../../../app/context/DoctorsContext'
import styles from '../page.module.scss'
export default function DoctorSpecTabs() {
	const { docTabs, tabSpec, setTabSpec } = useDoc()
	return (
		<div className={styles.tabs}>
			{docTabs.map(item => (
				<button
					onClick={() => setTabSpec(item.toLowerCase())}
					className={clsx({
						[styles.active]: item.toLowerCase() === tabSpec.toLowerCase()
					})}
					key={item}
				>
					{item}
				</button>
			))}
		</div>
	)
}
