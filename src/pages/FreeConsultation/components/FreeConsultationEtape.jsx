import React from 'react'
import styles from '../page.module.scss'
import clsx from 'clsx'

export default function FreeConsultationEtape() {
	return (
		<section className='mt-24'>
			<div className={`container ${styles.container}`}>
				<div className={clsx(`${styles.first} ${styles.etape}`)}></div>
				<div className={clsx(`${styles.second} ${styles.etape}`)}></div>
				<div className={styles.third}></div>
			</div>
		</section>
	)
}
