/* eslint-disable react/prop-types */
import clsx from 'clsx'
import { useKeyDown } from '../../entity/hooks/useKeyDown'
import { useMoreDetail } from '../../entity/more_detail/store'
import styles from './index.module.scss'
import {} from 'react-icons/io'

export default function MoreDetail({ children }) {
	const { isModal, toggleIsModal } = useMoreDetail()

	useKeyDown('Escape', () => {
		toggleIsModal(false)
	})

	return (
		<div
			className={clsx(styles.modal, {
				[styles.active]: isModal === true
			})}
		>
			<div className={styles.modal_body}>
				<div>
					<button onClick={() => toggleIsModal(false)}>ESC</button>
				</div>
				<div className={styles.modal_content}>{children}</div>
			</div>
		</div>
	)
}
