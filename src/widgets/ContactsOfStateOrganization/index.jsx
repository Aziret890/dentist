import { useState } from 'react'
import styles from './index.module.scss'
import IndexImage from './index.svg'
import clsx from 'clsx'
export default function ContactsOfStateOrganization() {
	const [show, setShow] = useState(0)
	return (
		<section>
			<div className={`container ${styles.container}`}>
				<div className={styles.left}>
					<img src={IndexImage} alt='image' />
				</div>
				<div className={styles.right}>
					<h1>Контакты государственных организаций по защите прав</h1>
					<ul className={styles.ul}>
						{contactsOfStateOrganization.map(item => (
							<li
								key={item.ud}
								className={clsx({
									[styles.active]: show === item.id
								})}
							>
								<div>
									<span>{item.title}</span>
									<button
										onClick={() =>
											setShow(prev => (prev === item.id ? 0 : item.id))
										}
									>
										{show === item.id ? (
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M12.3143 10.8H11.5H10.8H6V13.2H10.8H11.5H12.3143H13.2H18V10.8H13.2H12.3143Z'
													fill='#2CB2BB'
												/>
												<path
													d='M12 0C5.3832 0 0 5.3832 0 12C0 18.6168 5.3832 24 12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 0 12 0ZM12 21.6C6.7068 21.6 2.4 17.2932 2.4 12C2.4 6.7068 6.7068 2.4 12 2.4C17.2932 2.4 21.6 6.7068 21.6 12C21.6 17.2932 17.2932 21.6 12 21.6Z'
													fill='#2CB2BB'
												/>
											</svg>
										) : (
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M13.2 6H10.8V10.8H6V13.2H10.8V18H13.2V13.2H18V10.8H13.2V6Z'
													fill='#2CB2BB'
												/>
												<path
													d='M12 0C5.3832 0 0 5.3832 0 12C0 18.6168 5.3832 24 12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 0 12 0ZM12 21.6C6.7068 21.6 2.4 17.2932 2.4 12C2.4 6.7068 6.7068 2.4 12 2.4C17.2932 2.4 21.6 6.7068 21.6 12C21.6 17.2932 17.2932 21.6 12 21.6Z'
													fill='#2CB2BB'
												/>
											</svg>
										)}
									</button>
								</div>
								<p
									className={clsx(styles.content, {
										[styles.actives]: show === item.id
									})}
								>
									<span>{item.data.city}</span>
									<span>{item.data.phone}</span>
									<span>{item.data.email}</span>
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

const contactsOfStateOrganization = [
	{
		id: 1,
		title: 'Сфера охраны здоровья граждан',
		data: {
			city: 'Москва, ул. Горького, 36',
			phone: '+7 (3952) 21-70-13',
			email: 'npl@reg38.roszdravnadzor.ru'
		}
	},
	{
		id: 2,
		title: 'Сфера охраны здоровья граждан',
		data: {
			city: 'Иркутск, ул. Горького, 36',
			phone: '+7 (3952) 21-70-13',
			email: 'npl@reg38.roszdravnadzor.ru'
		}
	},
	{
		id: 3,
		title: 'Сфера охраны здоровья граждан',
		data: {
			city: 'Санк Петербург',
			phone: '+7 (3952) 21-70-13',
			email: 'npl@reg38.roszdravnadzor.ru'
		}
	}
]
