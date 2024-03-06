import React, { useState } from 'react'
import './Maps.scss'
import clsx from 'clsx'
function Maps() {
	const [countMapsInx, setCountMapsInx] = useState(1)
	const mapsData = [
		{ title: 'Стоматологическая поликлиника#2' },
		{ title: 'Cтоматология в Бишкеке Biostom' },
		{
			title: 'Стоматология Дента Dent`A'
		},
		{ title: 'Vita-dent Lux' },
		{ title: 'IDEAL DENT' }
	]
	const data = [
		{
			number: 5,
			iframe: (
				<>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.894806993314!2d74.5772367086914!3d42.873954278363385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83e6432776d%3A0x17f294c48a529462!2sIDEAL%20DENT!5e0!3m2!1sru!2skg!4v1709595191903!5m2!1sru!2skg'
						width='600'
						height='400'
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</>
			)
		},
		{
			number: 4,
			iframe: (
				<>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.894806993314!2d74.5772367086914!3d42.873954278363385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec95cb19da50b%3A0x25afd61651275b4f!2sVita-dent%20Lux!5e0!3m2!1sru!2skg!4v1709595312021!5m2!1sru!2skg'
						width='600'
						height='400'
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</>
			)
		},
		{
			number: 3,
			iframe: (
				<>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.894806993314!2d74.5772367086914!3d42.873954278363385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9084936e98f%3A0x4a75010d910fa1a4!2z0KHRgtC-0LzQsNGC0L7Qu9C-0LPQuNGPINCU0LXQvdGC0LAgRGVudGBB!5e0!3m2!1sru!2skg!4v1709595365891!5m2!1sru!2skg'
						width='600'
						height='400'
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</>
			)
		},
		{
			number: 3,
			iframe: (
				<>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.894806993314!2d74.5772367086914!3d42.873954278363385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7df7205438d%3A0x3c98dadf5ae5fb71!2zQ9GC0L7QvNCw0YLQvtC70L7Qs9C40Y8g0LIg0JHQuNGI0LrQtdC60LUgIkJpb3N0b20i!5e0!3m2!1sru!2skg!4v1709595392357!5m2!1sru!2skg'
						width='600'
						height='400'
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</>
			)
		},
		{
			number: 2,
			iframe: (
				<>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.894806993314!2d74.5772367086914!3d42.873954278363385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7df7205438d%3A0x3c98dadf5ae5fb71!2zQ9GC0L7QvNCw0YLQvtC70L7Qs9C40Y8g0LIg0JHQuNGI0LrQtdC60LUgIkJpb3N0b20i!5e0!3m2!1sru!2skg!4v1709595392357!5m2!1sru!2skg'
						width='600'
						height='400'
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</>
			)
		},
		{
			number: 1,
			iframe: (
				<>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.894806993314!2d74.5772367086914!3d42.873954278363385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec989106a046f%3A0xe0bb65b5a3f23c2b!2z0KHRgtC-0LzQsNGC0L7Qu9C-0LPQuNGH0LXRgdC60LDRjyDQv9C-0LvQuNC60LvQuNC90LjQutCwIzI!5e0!3m2!1sru!2skg!4v1709595433715!5m2!1sru!2skg'
						width='600'
						height='400'
						allowfullscreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</>
			)
		}
	]
	console.log(data.find(el => (el.number == countMapsInx ? el.iframe : '')))
	console.log(countMapsInx)
	return (
		<section className='maps mt-[98px]'>
			<div className='container'>
				<h1>Контактная информация</h1>
				<div className='maps__content mt-[54px]'>
					<div className='maps__wrapper'>
						<div className='maps__wrapper__contact'>
							<div
								data-aos='zoom-in-right'
								data-aos-duration={1500}
								className={clsx(
									'maps__wrapper__contact__block flex flex-col items-start gap-[20px]'
								)}
							>
								{mapsData.map((el, inx) => (
									<div
										key={inx}
										onClick={() => setCountMapsInx(inx + 1)}
										className={clsx(
											'cursor-pointer maps__wrapper__contact__block-child flex justify-start gap-5 items-center',
											{
												active: countMapsInx === inx + 1
											}
										)}
									>
										<div className='maps__wrapper__contact__block-mini'></div>
										<div className='flex flex-col'>
											<h2>Клиника №{inx + 1}</h2>
											<h3>{el.title}</h3>
										</div>
									</div>
								))}
							</div>
							<div className='maps__wrapper__maps'>
								<div
									data-aos='zoom-in-up'
									data-aos-duration={1500}
									className='maps__wrapper__maps-child'
								>
									{data.find(el => el.number === countMapsInx)?.iframe}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Maps
