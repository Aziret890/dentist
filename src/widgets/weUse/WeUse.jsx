import './weUse.scss'
import images1 from '../../src/images/pages2-slider.png'
import images2 from '../../src/images/pages2-slider1.png'

function WeUse() {
	return (
		<section className='weUse'>
			<div className='container'>
				<div className='weUse__content'>
					<div className='weUse__content__title'>
						<p>
							ш <span>Корпорация Kerr</span>, подразделение Sybron Dental
							Speciality, является одним из ведущих в мире производителей
							высококачественных расходных материалов для стоматологии. Компания
							была создана в США в 1891 году.
						</p>
					</div>
					<div className='weUse__content__slider'>
						<img src={images1} alt='' />
						<img src={images2} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default WeUse
