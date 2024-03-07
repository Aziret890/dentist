import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import DropDown from '../../../../features/DropDown'
import styles from '../index.module.css'

const HeaderBottomSlice = () => {
	const patientsConfig = {
		items: [
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
		items: [
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
		items: [
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
		width: 190,
		items: ['Цена', 'Акции', 'Рассрочка и кредит', 'Бонусная программа', 'ДМС'],
		links: [
			'/price',
			'/price?tabId=1',
			'/price?tabId=2',
			'/price?tabId=3',
			'/price?tabId=4',
			'/price?tabId=6'
		],
		initialSelectedItem: (
			<>
				Цена
				<IoIosArrowDown />
			</>
		)
	}
	const commuterConfig = {
		items: [
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
		width: 130,
		items: ['О клинике', 'Сертификаты', 'Реквизиты', 'Вакансии'],
		links: [
			'/vacancy',
			'/vacancy?tabId=2',
			'/vacancy?tabId=3',
			'/vacancy?tabId=4'
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
				<DropDown {...aboutClientConfig} />
				<Link className={styles.a} to={'/contact/information'}>
					Контакты
				</Link>
			</div>
		</div>
	)
}

export default HeaderBottomSlice
