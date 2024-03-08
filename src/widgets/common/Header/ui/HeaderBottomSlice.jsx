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
		items: ['Рекомендация перед приемом', 'Новости', 'Гарантии'],
		links: ['#', '/news', '#'],
		initialSelectedItem: (
			<>
				Пример работы
				<IoIosArrowDown />
			</>
		)
	}
	const feedbackConfig = {
		minWidth: 250,
		items: [
			'Отзывы',
			'Интервью с пациентами',
			'Отзывы в социальных сетях',
			'Отзывы пациентов'
		],
		links: [
			'/reviews',
			'/reviews?tabIndex=2',
			'/reviews?tabIndex=3',
			'/reviews?tabIndex=4'
		],
		initialSelectedItem: (
			<>
				Отзыва
				<IoIosArrowDown />
			</>
		)
	}
	const priceConfig = {
		minWidth: 210,
		items: ['Цена', 'Акции', 'Рассрочка и кредит', 'Бонусная программа', 'ДМС'],
		links: [
			'/price',
			'/price?tabId=1',
			'/price?tabId=2',
			'/price?tabId=3',
			'/price?tabId=4'
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
		minWidth: 210,
		items: [
			'О клинике',
			'Сертификаты',
			'Правовая информация',
			'Реквизиты',
			'Вакансии'
		],
		links: [
			'/about/clinic',
			'/about/clinic?tabId=2',
			'/about/clinic?tabId=3',
			'/about/clinic?tabId=4',
			'/about/clinic?tabId=5'
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
