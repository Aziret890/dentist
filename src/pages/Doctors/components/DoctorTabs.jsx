import clsx from 'clsx'
import { useDoc } from '../../../app/context/DoctorsContext'
import styles from '../page.module.scss'
export default function DoctorTabs() {
	const { docTabs, tabState, setTabState } = useDoc()
	return (
		<div className={styles.tabs}>
			{docTabs.map(item => (
				<button
					onClick={() => setTabState(item.toLowerCase())}
					className={clsx({
						[styles.active]: item.toLowerCase() === tabState.toLowerCase()
					})}
					key={item}
				>
					{item}
				</button>
			))}
		</div>
	)
}
