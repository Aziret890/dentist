import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../index.module.scss'

import { motion } from 'framer-motion'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import Message from '../../../../shared/assets/images/message.icons.svg'
import Pencil from '../../../../shared/assets/images/pencil.svg'

const variants = {
	hidden: {
		opacity: 0,
		translateY: 10
	},
	visible: { opacity: 1, translateY: 0 }
}
// eslint-disable-next-line react/prop-types
export default function HeaderMenu({ isMenu, toggleIsMenu }) {
	const [isMenus, setIsMenus] = useState(null)

	const toggleIsMenus = d => {
		setIsMenus(d)
	}

	const findMenu = menuList2.find(
		item => item.title.toLowerCase() === String(isMenus)
	)

	return (
		<div
			id='menu'
			className={clsx(styles.menu, {
				[styles.active]: isMenu
			})}
		>
			<div className={clsx(`relative ${styles.content}`)}>
				{isMenus === null ? (
					<div className={clsx(styles['menu-contents'])}>
						<ul className={styles.menus}>
							{menuList.map((item, idx) => (
								<motion.li
									variants={variants}
									initial='hidden'
									animate='visible'
									transition={{
										delay: idx * 0.2,
										ease: 'easeInOut',
										duration: 0.25
									}}
									viewport={{ amount: 0 }}
									key={item.title}
									className={clsx('overflow-hidden')}
								>
									<button>
										<span>{item.title}</span>
										<IoIosArrowForward className='rotate-90' />
									</button>

									<ol>
										{item.links.map((link, idx) => (
											<motion.li
												variants={variants}
												initial='hidden'
												animate='visible'
												transition={{
													delay: idx * 0.2,
													ease: 'easeInOut',
													duration: 0.25
												}}
												viewport={{ amount: 0 }}
												key={idx}
											>
												<Link
													onClick={() => {
														window.scrollTo(0, 0)
													}}
													to={link.path}
												>
													{link.text}
												</Link>
											</motion.li>
										))}
									</ol>
								</motion.li>
							))}
						</ul>

						<ul className={styles.menus2}>
							{menuList2.map((item, idx) => (
								<motion.li
									variants={variants}
									initial='hidden'
									animate='visible'
									transition={{
										delay: idx * 0.2,
										ease: 'easeInOut',
										duration: 0.25
									}}
									viewport={{ amount: 0 }}
									key={item.title}
								>
									{item.title.toLowerCase() !== 'Врачи'.toLowerCase() &&
									item.title.toLowerCase() !== 'Контакты'.toLowerCase() ? (
										<button
											onClick={() => {
												toggleIsMenus(item.title.toLowerCase().trim())
											}}
											className='flex w-full items-center justify-between'
										>
											{item.title}
											<IoIosArrowForward />
										</button>
									) : (
										<Link
											onClick={() => {
												window.scrollTo(0, 0)
												toggleIsMenu(false)
											}}
											to={item.links[0].path}
										>
											{item.title}
										</Link>
									)}
								</motion.li>
							))}
						</ul>
					</div>
				) : (
					<div className={clsx(styles['menus-content'])}>
						<button onClick={() => setIsMenus(null)} className={styles.back}>
							<FaArrowLeftLong />
							Назад
						</button>
						<h3>{isMenus}</h3>
						<ol>
							{findMenu?.links?.map((item, idx) => (
								<motion.li
									variants={variants}
									initial='hidden'
									animate='visible'
									transition={{
										delay: idx * 0.2,
										ease: 'easeInOut',
										duration: 0.25
									}}
									viewport={{ amount: 0 }}
									key={idx}
									onClick={() => toggleIsMenu(false)}
								>
									<Link
										onClick={() => {
											window.scrollTo(0, 0)
										}}
										to={item.path ? item.path : ''}
									>
										{' '}
										{item.text}
									</Link>
								</motion.li>
							))}
						</ol>
					</div>
				)}
				{isMenus === null && (
					<ul className={styles['menu-buttons']}>
						<button>
							<img src={Pencil} alt='' />
							Записаться на приём
						</button>
						<button>
							<img src={Message} alt='' />
							Оставить отзыв <br /> или написать директору
						</button>
						<span>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1 7V3M1 7C1 8.10455 1.89543 9 3 9C4.10457 9 5 8.10455 5 7C5 5.89545 4.10457 5 3 5C1.89543 5 1 5.89545 1 7Z'
									stroke='#253F41'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M11 7V3M11 7C11 8.10455 10.1046 9 9 9C7.89545 9 7 8.10455 7 7C7 5.89545 7.89545 5 9 5C10.1046 5 11 5.89545 11 7Z'
									stroke='#253F41'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M7 7H5'
									stroke='#253F41'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							Версия для слабовидящих
						</span>
					</ul>
				)}
			</div>
		</div>
	)
}

const menuList = [
	{
		title: 'Восстановить зуб',
		links: [
			{
				path: '',
				text: 'Имплантация зубов'
			}
		]
	},
	{
		title: 'Коронка на зуб',
		links: [
			{
				path: '',
				text: 'Мост из коронок'
			},
			{
				path: '',
				text: 'Съёмное протезирование зубов'
			},
			{
				path: '',
				text: 'Виниры'
			},
			{
				path: '',
				text: 'Художественная реставрация зубов'
			}
		]
	},
	{
		title: 'Восстановить все зубы',
		links: [
			{
				path: '',
				text: 'Все зубы за 1 день All-on-4'
			},
			{
				path: '',
				text: 'Имплантация All-on-6'
			}
		]
	},
	{
		title: 'Вылечить зубы',
		links: [
			{
				path: '',
				text: 'Лечение зубов'
			},
			{
				path: '',
				text: 'Лечение кариеса'
			},
			{
				path: '',
				text: 'Лечение пульпита'
			},
			{
				path: '',
				text: 'Лечение перидонтита'
			}
		]
	},
	{
		title: 'Красивая улыбка',
		links: [
			{
				path: '',
				text: 'Профессиональная чистка зубов'
			},
			{
				path: '',
				text: 'Отбеливание зубов'
			},
			{
				path: '',
				text: 'Отбеливание Zoom'
			},
			{
				path: '',
				text: 'Художественная реставрация зубов'
			},

			{
				path: '',
				text: 'Виниры'
			},
			{
				path: '',
				text: 'Брекеты'
			},
			{
				path: '',
				text: 'Скайсы'
			}
		]
	}
]

const menuList2 = [
	{
		title: 'Примеры работ',
		links: [
			{ path: '', text: 'Протезирование All-on-4 и All-on-6' },
			{ path: '', text: 'Имплантация зубов' },
			{ path: '', text: 'Протезирование зубов' },
			{ path: '', text: 'Виниры' },
			{ path: '', text: 'Лечение зубов' },
			{ path: '', text: 'Художественная реставрация' },
			{ path: '', text: 'Отбеливание' },
			{ path: '', text: 'Брекеты' },
			{ path: '', text: 'Профессиональная чистка зубов' },
			{ path: '', text: 'Лечение дёсен' }
		]
	},
	{
		title: 'Врачи',
		links: [
			{
				path: '/doctors',
				text: ''
			}
		]
	},
	{
		title: 'Цены',
		links: [
			{
				path: '/price',
				text: 'Цены'
			},
			{
				path: '/price?tabId=1',
				text: 'Акции'
			},
			{
				path: '/price?tabId=2',
				text: 'Рассрочка и кредит'
			},
			{
				path: '/price?tabId=3',
				text: 'Бонусная программа'
			},
			{
				path: '/price?tabId=4',
				text: 'ДМС'
			}
		]
	},
	{
		title: 'Отзывы',
		links: [
			{ path: '/reviews', text: 'Отзывы' },
			{ path: '/reviews?tabIndex=2', text: 'Интервью с пациентами' },
			{ path: '/reviews?tabIndex=3', text: 'Отзывы в социальных сетях' },
			{ path: '/reviews?tabIndex=4', text: 'Отзывы пациентов' }
		]
	},
	{
		title: 'Для иногородних',
		links: [
			{
				path: '',
				text: 'Рекомендации перед приёмом'
			},
			{
				path: '',
				text: 'Рекомендации после лечения'
			},
			{
				path: '',
				text: 'Гарантии'
			}
		]
	},
	{
		title: 'О клинике',
		links: [
			{
				path: '/about/clinic',
				text: 'О клинике'
			},
			{
				path: '/about/clinic?tabId=2',
				text: 'Сертификаты'
			},
			{
				path: '/about/clinic?tabId=3',
				text: 'Реквизиты'
			},
			{
				path: '/about/clinic?tabId=4',
				text: 'Вакансии'
			}
		]
	},
	{
		title: 'Контакты',
		links: [
			{
				path: '/contact/information',
				text: ''
			}
		]
	}
]
