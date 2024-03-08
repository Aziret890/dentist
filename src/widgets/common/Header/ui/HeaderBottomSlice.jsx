/* eslint-disable react/prop-types */
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import DropDown from '../../../../features/DropDown'
import styles from '../index.module.scss'
import clsx from 'clsx'

const HeaderBottomSlice = ({ setIsServiceModal, isServiceModal }) => {
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
			'Протезирование All-on-4 и All-on-6',
			'Имплантация зубов',
			'Протезирование зубов',
			'Виниры',
			'Лечение зубов',
			'Художественная реставрация',
			'Отбеливание',
			'Брекеты',
			'Профессиональная чистка зубов',
			'Лечение дёсен'
		],
		minWidth: 230,
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
				<Link
					onMouseOver={() => setIsServiceModal(true)}
					onMouseOut={() => setIsServiceModal(false)}
					to={'/services'}
					className={clsx(styles.h1, {
						[styles.active]: isServiceModal
					})}
				>
					<svg
						width='14'
						height='14'
						viewBox='0 0 14 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7 5.125C8.1736 5.125 9.125 4.1736 9.125 3C9.125 1.82639 8.1736 0.875 7 0.875C5.8264 0.875 4.875 1.82639 4.875 3C4.875 4.1736 5.8264 5.125 7 5.125ZM7.875 3C7.875 3.48325 7.48325 3.875 7 3.875C6.51675 3.875 6.125 3.48325 6.125 3C6.125 2.51675 6.51675 2.125 7 2.125C7.48325 2.125 7.875 2.51675 7.875 3ZM11 9.125C12.1736 9.125 13.125 8.1736 13.125 7C13.125 5.8264 12.1736 4.875 11 4.875C9.8264 4.875 8.875 5.8264 8.875 7C8.875 8.1736 9.8264 9.125 11 9.125ZM11.875 7C11.875 7.48325 11.4832 7.875 11 7.875C10.5168 7.875 10.125 7.48325 10.125 7C10.125 6.51675 10.5168 6.125 11 6.125C11.4832 6.125 11.875 6.51675 11.875 7ZM7 13.125C8.1736 13.125 9.125 12.1736 9.125 11C9.125 9.8264 8.1736 8.875 7 8.875C5.8264 8.875 4.875 9.8264 4.875 11C4.875 12.1736 5.8264 13.125 7 13.125ZM7.875 11C7.875 11.4832 7.48325 11.875 7 11.875C6.51675 11.875 6.125 11.4832 6.125 11C6.125 10.5168 6.51675 10.125 7 10.125C7.48325 10.125 7.875 10.5168 7.875 11ZM3 9.125C4.1736 9.125 5.125 8.1736 5.125 7C5.125 5.8264 4.1736 4.875 3 4.875C1.82639 4.875 0.875 5.8264 0.875 7C0.875 8.1736 1.82639 9.125 3 9.125ZM3.875 7C3.875 7.48325 3.48325 7.875 3 7.875C2.51675 7.875 2.125 7.48325 2.125 7C2.125 6.51675 2.51675 6.125 3 6.125C3.48325 6.125 3.875 6.51675 3.875 7Z'
							fill='white'
							stroke='white'
							strokeWidth='0.25'
						/>
					</svg>
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
