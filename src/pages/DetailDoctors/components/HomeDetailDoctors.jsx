/* eslint-disable react/prop-types */
import styles from '../page.module.scss'
import { motion } from 'framer-motion'
const variants = {
	hidden: {
		opacity: 0,
		translateY: 100
	},
	visible: { opacity: 1, translateY: 0 }
}
const variants2 = {
	hidden: {
		opacity: 0,
		translateY: 100
	},
	visible: { opacity: 1, translateY: 0 }
}

export default function HomeDetailDoctors({ doc }) {
	return (
		<section className={styles.home}>
			<motion.div
				variants={variants}
				initial='hidden'
				animate='visible'
				transition={{
					delay: 0.15,
					ease: 'linear',
					duration: 0.3
				}}
				viewport={{ amount: 0 }}
				className={`container ${styles['home-container']}`}
			>
				<div className={styles['home-left']}>
					<motion.h1>{doc.name}</motion.h1>
					<motion.h3>{doc.experience} лет опыта</motion.h3>
					<ul>
						{doc.specialization.map((item, idx) => (
							<motion.li key={idx}>{item},</motion.li>
						))}
					</ul>
					<div className={styles['sign-up-doc']}>
						<button>Записаться к врачу</button>
						<button>
							<svg
								width='28'
								height='28'
								viewBox='0 0 28 28'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M8.05784 5.29272C7.59122 5.01619 7.00098 5.35252 7.00098 5.89491V22.1046C7.00098 22.647 7.59122 22.9833 8.05784 22.7068L21.7348 14.602C22.1923 14.3309 22.1923 13.6687 21.7348 13.3975L8.05784 5.29272Z'
									stroke='#2CB2BB'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
				<svg
					className={styles.svg}
					width='582'
					height='290'
					viewBox='0 0 582 290'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						opacity='0.1'
						d='M291 0C130.285 0 0 129.837 0 290H582C582 129.837 451.715 0 291 0Z'
						fill='white'
					/>
				</svg>
				<div className={styles['home-right']}>
					<img
						src={
							'https://s3-alpha-sig.figma.com/img/cd34/d12f/2ea2ee676053d7d6d2eabdceb35b35be?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZUSw2Wp1Uyf8WaF6m46AzQJe9mtD781ssku~zonMn-kPcIDZM2giB6ncTMBjUGm8tjzc744sCij~Rv3DioeLYJ0c155ogJvbhjvHlWnwT1ac7zpepS0fZnDymSJBw344geOe8i4QpYwZXi3hawPMmmuoPBwOq4~Nnv5KUyqjyfaK~LFnnbknwIGeVsU8-88DpQJNJMMAL5CPOvIx6QaQ8LZGoTjKSsAXQFwrPUHvvoAQIPq459fcprMBOwEnuKniTzXDY3tI2oieK0sgdMCZJYuGtdVbjhhhAGjpTZIaBW~QMiEF1zGaw2jQVMQtJJB5d2CPky1D2aZdTFQ3BnAhXA__'
						}
						alt=''
					/>
				</div>
				<motion.div
					variants={variants2}
					initial='hidden'
					animate='visible'
					transition={{
						delay: 0.35,
						ease: 'linear',
						duration: 0.2
					}}
					viewport={{ amount: 0 }}
					className={styles['doc-task']}
				>
					{doc.my_task}
				</motion.div>
			</motion.div>
		</section>
	)
}
/*
	
	
	
*/
