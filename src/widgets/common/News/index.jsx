import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import newIcon from '../../../shared/assets/images/newsicon.svg'
import './News.css'
import NewsCard from './NewsCard'
function News() {
	const [data, setData] = useState([])
	useEffect(() => {
		axios('https://akmatovt.pythonanywhere.com/news/').then(res =>
			setData(res.data)
		)
	}, [])
	return (
		<section className='news'>
			<div className='container'>
				<div className='news__content'>
					<div className='new__title'>
						<h1 data-aos='fade-up' data-aos-duration={1 * 300}>
							Новости
						</h1>
						<h4 data-aos='fade-up' data-aos-duration={2 * 300}>
							<Link
								onClick={() => {
									window.scrollTo(0, 0)
								}}
								to='/news'
								className='flex items-center gap-3'
							>
								Все новости <img src={newIcon} alt='' />
							</Link>
						</h4>
					</div>
					<div className='new__blocks'>
						{data.map((el, ind) => (
							<NewsCard index={ind} el={el} key={ind} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default News
