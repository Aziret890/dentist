import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Partners.css'

const Partners = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios('https://akmatovt.pythonanywhere.com/partners/').then(res =>
			setData(res.data)
		)
	}, [])
	return (
		<div id='partners'>
			<div className='container'>
				<div className='partners'>
					<h1>Мы работаем по ДМС</h1>
					<p>С ведущими страховыми компаниями России</p>
					<div className='pic-partners'>
						{data?.map(el => (
							<img
								src={`https://akmatovt.pythonanywhere.com/media/${el.logo}`}
								alt=''
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners
