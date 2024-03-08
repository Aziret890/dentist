/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import styles from '../page.module.scss'
export default function Characteristics() {
	const { data } = useQuery({
		queryKey: ['doc-characteristic'],
		queryFn: async () => {
			return (
				await axios(`https://akmatovt.pythonanywhere.com/characteristic/`)
			).data
		}
	})

	return (
		<section id={'section1'} className='mb-20'>
			<h1 data-aos='fade-up'>Уникальные характеристики врача</h1>
			<ul className={styles['character-content']}>
				{data &&
					data?.map((item, idx) => (
						<li data-aos-duration={idx * 500} data-aos='fade-up' key={idx}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</li>
					))}
			</ul>
		</section>
	)
}
