/* eslint-disable react/prop-types */
import styles from '../page.module.scss'
export default function Characteristics({ doc }) {
	return (
		<section id={'section1'} className='mb-20'>
			<h1 data-aos='fade-up'>Уникальные характеристики врача</h1>
			<ul className={styles['character-content']}>
				{doc.characteristics &&
					doc.characteristics.map((item, idx) => (
						<li data-aos-duration={idx * 500} data-aos='fade-up' key={idx}>
							<h3>{item.title}</h3>
							<p>{item.content}</p>
						</li>
					))}
			</ul>
		</section>
	)
}
