import styles from '../index.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import DropDown from '../../../../features/DropDown'

const HeaderBottomSlice = () => {
	const patientsConfig = {
		links: [
			'Рекомендация перед приемом',
			'Рекомендация после лечение',
			'Гарантии'
		],
		initialSelectedItem: (
			<>
				Пациенты
				<IoIosArrowDown />
			</>
		)
	}
	const workExampleConfig = {
		links: [
			'Рекомендация перед приемом',
			'Рекомендация после лечение',
			'Гарантии'
		],
		initialSelectedItem: (
			<>
				Пример работы
				<IoIosArrowDown />
			</>
		)
	}
	const feedbackConfig = {
		links: [
			'Рекомендация перед приемом',
			'Рекомендация после лечение',
			'Гарантии'
		],
		initialSelectedItem: (
			<>
				Отзыва
				<IoIosArrowDown />
			</>
		)
	}
	const priceConfig = {
		links: [
			'Рекомендация перед приемом',
			'Рекомендация после лечение',
			'Гарантии'
		],
		initialSelectedItem: (
			<>
				Цена
				<IoIosArrowDown />
			</>
		)
	}
	const commuterConfig = {
		links: [
			'Рекомендация перед приемом',
			'Рекомендация после лечение',
			'Гарантии'
		],
		initialSelectedItem: (
			<>
				Для иногородних
				<IoIosArrowDown />
			</>
		)
	}
	const aboutClientConfig = {
		links: [
			'О клинике',
			'Сертификаты',
			'Правовая информация',
			'Реквизиты',
			'Вакансии'
		],
		initialSelectedItem: (
			<>
				О клинике
				<IoIosArrowDown />
			</>
		)
	}

	return (
		<div className={styles['bottom-slice']}>
			<div className={`container ${styles.container}`}>
				<Link to={'/services'} className={styles.h1}>
					Услуги
				</Link>
				<DropDown {...workExampleConfig} />
				<Link className={styles.a} to={'/doctors'}>
					Врач
				</Link>
				<DropDown {...priceConfig} />
				<DropDown {...feedbackConfig} />
				<DropDown {...patientsConfig} />
				<DropDown {...commuterConfig} />
				<DropDown width={210} {...aboutClientConfig} />
				<Link className={styles.a} to={'/about/clinic'}>
					Контакты
				</Link>
			</div>
		</div>
	)
}

export default HeaderBottomSlice
