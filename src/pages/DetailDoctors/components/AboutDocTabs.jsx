/* eslint-disable react/prop-types */
import clsx from 'clsx'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import styles from '../page.module.scss'
gsap.registerPlugin(ScrollToPlugin)

const variants = {
	hidden: {
		opacity: 0,
		scale: 0
	},
	visible: { opacity: 1, scale: 1 }
}
export default function AboutDocTabs({ tab, setTab }) {
	const tabs = [
		'Вид деятельности',
		'Характеристики',
		'Образование',
		'Лицензии',
		'Примеры работ',
		'Фотографии',
		'Статьи'
	]

	function clickButton(item, index) {
		setTab(item.toLowerCase())
		gsap.to(window, {
			duration: 0.5,
			scrollTo: { y: '#section' + index, offsetY: index === 0 ? 110 : 40 },
			// ease: 'expo'
			ease: 'expo'
		})
	}

	return (
		<div className={styles['tab']}>
			<div className={`container ${styles['tab-container']}`}>
				{tabs.map((item, idx) => (
					<motion.button
						variants={variants}
						initial='hidden'
						animate='visible'
						transition={{
							delay: idx * 0.15,
							ease: 'easeInOut',
							duration: 0.3
						}}
						viewport={{ amount: 0 }}
						key={idx}
						onClick={() => clickButton(item, idx)}
						className={clsx({
							[styles.active]: tab.toLowerCase() === item.toLowerCase()
						})}
					>
						{item}
					</motion.button>
				))}
			</div>
		</div>
	)
}
