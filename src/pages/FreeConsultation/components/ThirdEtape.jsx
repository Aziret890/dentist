import clsx from 'clsx'
import styles from '../page.module.scss'
import { useState } from 'react'
import { useConsultation } from '../../../entity/consultate/store'
export default function ThirdEtape() {
	const { comment, setComment } = useConsultation()

	return (
		<div className={clsx(`${styles.third} ${styles.etape}`)}>
			<span
				className={clsx(styles.etape__num, {
					[styles.num__active]: comment.trim().length >= 20
				})}
			>
				3
			</span>
			<div className={styles.etape_start}>
				<h3>Подробно опишите свою проблему, которая вас беспокоит</h3>
				<h5>
					Какого вида боли, реакция на холодное, горячее, кислое, сладкое или от
					накусывания
				</h5>
			</div>
			<div>
				<textarea
					name='comment'
					id='comment'
					value={comment}
					onChange={e => setComment(e.target.value)}
					placeholder='Мой комментарий...'
					minLength={20}
				></textarea>
			</div>
		</div>
	)
}
