/* eslint-disable react/prop-types */
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useDropDown } from '../../entity/hooks/useDropDown'

const variants = {
	hidden: {
		opacity: 0,
		scaleY: 0
	},
	visible: { opacity: 1, scaleY: 1 }
}

const DropDown = ({
	initialSelectedItem,
	items,
	links,
	minWidth,
	maxWidth,
	width2
}) => {
	const { selectedItem, isOpen, toggleDropDown, onSelectItem, dropDownRef } =
		useDropDown({
			initialSelectedItem,
			items: items || links,
			isState: false
		})

	return (
		<div className={styles.dropdownContainer}>
			<button
				onMouseOver={() => toggleDropDown(true)}
				onMouseOut={() => toggleDropDown(false)}
				onClick={() => {
					toggleDropDown(true)
				}}
				style={{
					minWidth: width2
				}}
				className={styles.dropdownButton}
			>
				{selectedItem}
			</button>
			<div
				onMouseOver={() => toggleDropDown(true)}
				onMouseOut={() => toggleDropDown(false)}
				ref={!isOpen ? dropDownRef : null}
				style={{
					minWidth: minWidth,
					maxWidth: maxWidth
				}}
				className={clsx(styles.dropdownContent, {
					[styles.show]: isOpen
				})}
			>
				{items?.map(
					(link, idx) =>
						isOpen && (
							<motion.li
								key={link}
								variants={variants}
								initial='hidden'
								animate='visible'
								transition={{
									delay: idx * 0.2,
									ease: 'easeInOut',
									duration: 0.25
								}}
								viewport={{ amount: 0 }}
								className={idx === 0 ? styles.li : ''}
							>
								{isOpen && items && links && Array.isArray(links) && (
									<Link
										to={
											isOpen && links && Array.isArray(links) ? links[idx] : ''
										}
										onClick={() => {
											onSelectItem(links[idx])
											toggleDropDown(false)
										}}
									>
										{link}
									</Link>
								)}
								{!links && (
									<button
										onClick={() => {
											toggleDropDown(false)
											onSelectItem(link)
										}}
									>
										{link}
									</button>
								)}
							</motion.li>
						)
				)}
			</div>
		</div>
	)
}

export default DropDown
