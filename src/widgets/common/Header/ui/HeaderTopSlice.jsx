import { IoIosArrowDown } from 'react-icons/io'
import Glass from '../../../../shared/assets/images/Glass.svg'
import TelIcon from '../../../../shared/assets/images/TelIcon.svg'
import ClockIcon from '../../../../shared/assets/images/header-clock.svg'
import EmailIcon from '../../../../shared/assets/images/header-email.svg'
import Cursor from '../../../../shared/assets/images/header-logo-cursor.svg'
import styles from '../index.module.scss'
import DropDown from '../../../../features/DropDown'

export const HeaderTopSlice = () => {
	const cityConfig = {
		items: ['Москва1', 'Иркутск', 'Санкт-Петербург'],
		initialSelectedItem: (
			<>
				Москва <IoIosArrowDown />
			</>
		)
	}

	return (
		<div className={styles['top-slice']}>
			<div className={`${styles.container}`}>
				<div className={styles.cursor}>
					<img src={Cursor} alt='' />
					<DropDown minWidth={170} {...cityConfig} />
				</div>
				<div className={`${styles.div} flex items-center gap-2`}>
					<img src={TelIcon} alt='' />
					<a href='tel:+8 (800) 200-45-65'>8 (800) 200-45-65</a>
					<a href='tel:+8 (800) 200-45-65'>Заказать звонок</a>
				</div>
				<div className={`${styles.div} flex items-center gap-2`}>
					<img src={ClockIcon} alt='' />
					<span>В будни с 9:00 до 18:00</span>
				</div>
				<div className={`${styles.div} flex items-center gap-2`}>
					<img src={EmailIcon} alt='' />
					<a href='mailto:Consult@clinic.ru'>Consult@clinic.ru</a>
				</div>
				<div className={`${styles.div} flex items-center gap-2`}>
					<img src={Glass} alt='' />
					<span>Версия для слабовидящих</span>
				</div>
			</div>
		</div>
	)
}
