/* eslint-disable react/prop-types */
import styles from '../page.module.scss'

export default function Education({ doc }) {
	const { beginning, basic, extra } = doc.education.some
	return (
		<section id={'section2'} className='mb-20'>
			<h1 data-aos='fade-up'>Образование врача</h1>
			<div className={styles['education-content']}>
				{doc.education && (
					<>
						<div className={styles['education-left']}>
							{doc.education.some && doc.education.some && (
								<>
									<p data-aos='fade-up' className='mb-10'>
										{beginning}
									</p>
									<div className={styles['education']}>
										<h3 data-aos='fade-up'>Основное</h3>
										<ul>
											{basic.map((item, idx) => (
												<li
													data-aos-duration={idx * 500}
													data-aos='fade-up'
													key={idx}
												>
													<span data-aos='fade-up'>{item.year}</span>
													<p data-aos='fade-up'>{item.description}</p>
												</li>
											))}
										</ul>
									</div>
									<div className={styles['education']}>
										<h3 data-aos='fade-up'>Дополнительное</h3>
										<ul>
											{extra.map((item, idx) => (
												<li
													data-aos-duration={idx * 500}
													data-aos='fade-up'
													key={idx}
												>
													<span data-aos='fade-up'>{item.year}</span>
													<p data-aos='fade-up'>{item.description}</p>
												</li>
											))}
										</ul>
									</div>
									<button data-aos='fade-up' className={styles['show_more']}>
										Показать ещё
									</button>
								</>
							)}
						</div>
						<div className={styles['education-right']}>
							{doc.education.photo && (
								<>
									<div className='flex flex-col items-start gap-5'>
										<div className='flex items-start gap-5'>
											<div className='flex flex-col items-start gap-5'>
												<img
													data-aos='fade-up'
													className={styles['one-type']}
													src={doc.education.photo[0]}
													alt='doc'
												/>
												<img
													data-aos='fade-up'
													className={styles['one-type']}
													src={doc.education.photo[1]}
													alt='doc'
												/>
											</div>
											<img
												data-aos='fade-up'
												className={styles['two-type']}
												src={doc.education.photo[2]}
												alt='doc'
											/>
										</div>
										<img
											data-aos='fade-up'
											className={styles['three-type']}
											src={doc.education.photo[3]}
											alt='doc'
										/>
									</div>
								</>
							)}
						</div>
					</>
				)}
			</div>
		</section>
	)
}
