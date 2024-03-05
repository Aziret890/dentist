import { useEffect, useState } from 'react'
import styles from '../index.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import Pencil from '../../../../shared/assets/images/pensil.svg'
import Message from '../../../images/message.icons.svg'
import { IoIosArrowForward } from 'react-icons/io'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const variants = {
	hidden: {
		opacity: 0,
		translateY: 10
	},
	visible: { opacity: 1, translateY: 0 }
}
// eslint-disable-next-line react/prop-types
export default function HeaderMenu({ isMenu }) {
	const [isMenus, setIsMenus] = useState(null)

	const toggleIsMenus = d => {
		setIsMenus(() => d)
	}

	useEffect(() => {
		if (!isMenu) {
			setIsMenus(null)
		}
		if (isMenus !== null) {
			document.querySelector('#menu').style.overflowX = 'hidden'
		} else {
			document.querySelector('#menu').style.overflow = 'auto'
		}
	}, [isMenu, isMenus])

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
								>
									<h3>{item.title}</h3>
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
												<Link to={link.path}>{link.text}</Link>
											</motion.li>
										))}
									</ol>
								</motion.li>
							))}
						</ul>

						<ul className={styles['menu-buttons']}>
							<button>
								<img src={Pencil} alt='' />
								Записаться на приём
							</button>
							<button>
								<img src={Message} alt='' />
								Оставить отзыв <br /> или написать директору
							</button>
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
									<h3>{item.title}</h3>
									{item.title !== 'Врачи' && item.title !== 'Контакты' && (
										<button
											onClick={() => {
												toggleIsMenus(item.title.toLowerCase().trim())
											}}
										>
											<IoIosArrowForward />
										</button>
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
								>
									{item.text}
								</motion.li>
							))}
						</ol>
					</div>
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
		title: 'Врачи',
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
		title: 'Цены',
		links: [
			{
				path: '',
				text: ''
			}
		]
	},
	{
		title: 'Отзывы',
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
		title: 'О клнике',
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
		title: 'Контакты',
		links: [
			{
				path: '',
				text: 'Пициенты'
			}
		]
	}
]
