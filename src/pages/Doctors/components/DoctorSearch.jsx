import { IoSearchOutline } from 'react-icons/io5'
import styles from '../page.module.scss'
import { useDoc } from '../../../app/context/DoctorsContext'
export default function DoctorSearch() {
	const { inputBind } = useDoc()

	return (
		<div className={styles.search}>
			<div className={styles['input-box']}>
				<label htmlFor='search'>Врачи</label>
				<input
					{...inputBind}
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
	)
}
