/* eslint-disable react/prop-types */
import styles from '../page.module.scss'

export default function Articles({ doc }) {
	const { article } = doc
	return (
		<section id='section6' className={'mb-20'}>
			<h1 data-aos='fade-up'>Статьи врача</h1>
			<ul className={styles.articles_content}>
				{article &&
					article.map((item, idx) => (
						<li data-aos='fade-up' data-aos-duration={idx * 500} key={idx}>
							<article>
								<h3 data-aos='fade-up'>{item.title}</h3>
								<p data-aos='fade-up'>{item.description}</p>
							</article>
							<span data-aos='fade-up'>{item.posted}</span>
						</li>
					))}
			</ul>
		</section>
	)
}
