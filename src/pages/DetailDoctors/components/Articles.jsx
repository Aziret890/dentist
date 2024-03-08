/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query'
import styles from '../page.module.scss'
import axios from 'axios'

export default function Articles({ id }) {
	const { data } = useQuery({
		queryKey: ['doc_article', id],
		queryFn: async () => {
			return (await axios(`https://akmatovt.pythonanywhere.com/article/`)).data
		}
	})
	return (
		<section id='section6' className={'mb-20'}>
			<h1 data-aos='fade-up'>Статьи врача</h1>
			<ul className={styles.articles_content}>
				{data &&
					data?.map((item, idx) => (
						<li data-aos='fade-up' data-aos-duration={idx * 500} key={idx}>
							<article>
								<h3 data-aos='fade-up'>{item?.title}</h3>
								<p data-aos='fade-up'>{item?.description}</p>
							</article>
						</li>
					))}
			</ul>
		</section>
	)
}
