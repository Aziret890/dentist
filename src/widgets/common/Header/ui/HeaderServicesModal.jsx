/* eslint-disable react/prop-types */
import clsx from 'clsx'
import styles from '../index.module.scss'

export default function HeaderServicesModal({
	isServiceModal,
	setIsServiceModal
}) {
	return (
		<div
			onMouseOver={() => setIsServiceModal(true)}
			onMouseOut={() => setIsServiceModal(false)}
			className={clsx(styles.service_menu, {
				[styles.actives]: isServiceModal
			})}
		>
			<div className={`container ${styles.service_container}`}>
				div
			</div>
		</div>
	)
}
