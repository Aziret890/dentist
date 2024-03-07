import clsx from 'clsx'
import { useState } from 'react'
import styles from './index.module.scss'
import ServicesTabContent from './ui/ServicesTabContent'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'

export default function AllServices() {
	const [servicesTab, setServicesTab] = useState(
		'Поиск по направлениям'.toLowerCase()
	)
	const { width } = useWindowSize()
	return (
		<section>
			<div className={`container ${styles.container}`}>
				<div className={clsx(`${styles.first} flex items-center justify-between gap-5`)}>
					<h1 data-aos='fade-up'>Все услуги</h1>
					<ul
						data-aos='fade-up'
						data-aos-duration={1000}
						className='flex items-center justify-end gap-3'
					>
						{allServicesArr.map((item, idx) => (
							<li
								className={clsx({
									[styles.active]:
										servicesTab.toLowerCase() === item.toLowerCase()
								})}
								onClick={() => setServicesTab(item.toLowerCase())}
								key={idx}
							>
								<h4>{item}</h4>
								<span>15</span>
								{width > 940 && (
									<svg
										width='284'
										height='88'
										viewBox='0 0 284 88'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0 8C0 3.58172 3.58172 0 8 0H276C280.418 0 284 3.58172 284 8V56.6475C284 60.8047 280.816 64.2691 276.674 64.6191L8.67363 87.267C4.00624 87.6614 0 83.9795 0 79.2954V8Z'
											fill='#2CB2BB'
										/>
									</svg>
								)}
							</li>
						))}
					</ul>
				</div>
				<div className={'mt-16'}>
					<ServicesTabContent tab={servicesTab} />
				</div>
			</div>
		</section>
	)
}

const allServicesArr = [
	'Поиск по направлениям',
	'Поиск по проблемам',
	'Когда все запущено'
]
