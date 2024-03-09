import './Partners.css'
import Partner1 from './image 28.png'
import Partner2 from './image 29.png'
import Partner3 from './image 30.png'
import Partner4 from './image 31.png'
import Partner5 from './image 32.png'
import Partner6 from './image 33.png'

const Partners = () => {
	return (
		<div id='partners'>
			<div className='container'>
				<div className='partners'>
					<h1 data-aos='fade-up' data-aos-duration={1 * 300}>
						Мы работаем по ДМС
					</h1>
					<p data-aos='fade-up' data-aos-duration={2 * 300}>
						С ведущими страховыми компаниями России
					</p>
					<div className='pic-partners'>
						<img
							data-aos='fade-up'
							data-aos-duration={1 * 300}
							src={Partner1}
							alt='image :/'
						/>
						<img
							data-aos='fade-up'
							data-aos-duration={2 * 300}
							src={Partner2}
							alt='image :/'
						/>
						<img
							data-aos='fade-up'
							data-aos-duration={3 * 300}
							src={Partner3}
							alt='image :/'
						/>
						<img
							data-aos='fade-up'
							data-aos-duration={4 * 300}
							src={Partner4}
							alt='image :/'
						/>
						<img
							data-aos='fade-up'
							data-aos-duration={5 * 300}
							src={Partner5}
							alt='image :/'
						/>
						<img
							data-aos='fade-up'
							data-aos-duration={6 * 300}
							src={Partner6}
							alt='image :/'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners
