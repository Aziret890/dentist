/* eslint-disable react/prop-types */
import clsx from 'clsx'
import ButtonRoutes from '../../pages/sale/ButtonRoutes'
import './Price.scss'
import { useState } from 'react'

function Price({ id }) {
	const [tabContentIndex, setTabContentIndex] = useState(0)
	return (
		<section className='price mt-[98px]'>
			<div className='container'>
				<div className='price__content'>
					<center>{onTitle(id)}</center>
					<ButtonRoutes id={id} />
				</div>
				<div className='price__tab--content'>
					{id === 0 ? (
						<>
							<div className='price__sort mt-[64px] flex justify-between'>
								<button
									onClick={() => setTabContentIndex(0)}
									className={clsx('price__sort-xa', {
										active: tabContentIndex === 0
									})}
								>
									<p className='text-center mb-1'>Восстановить зуб</p>
									<div className='price__sort__div-none'></div>
								</button>
								<button
									onClick={() => setTabContentIndex(1)}
									className={clsx('price__sort-xa', {
										active: tabContentIndex === 1
									})}
								>
									<p className='text-center mb-1'>Восстановить все зубы</p>
									<div className='price__sort__div-none'></div>
								</button>
								<button
									onClick={() => setTabContentIndex(2)}
									className={clsx('price__sort-xa', {
										active: tabContentIndex === 2
									})}
								>
									<p className='text-center mb-1'>Вылечить зубы</p>
									<div className='price__sort__div-none'></div>
								</button>
								<button
									onClick={() => setTabContentIndex(3)}
									className={clsx('price__sort-xa', {
										active: tabContentIndex === 3
									})}
								>
									<p className='text-center mb-1'>Красивая улыбка</p>
									<div className='price__sort__div-none'></div>
								</button>
							</div>
							<hr className='w-full h-1' />
							Цены
						</>
					) : id === 1 ? (
						'Акции'
					) : id === 2 ? (
						'Рассрочка и кредит'
					) : id === 3 ? (
						'Бонусная программа'
					) : id === 4 ? (
						'ДМС'
					) : null}
				</div>
			</div>
		</section>
	)
}

function onTitle(index) {
	return (
		<h1>
			{!index
				? 'Цены'
				: index === 1
				? 'Акция'
				: index === 2
				? 'Рассрочка и кредит'
				: index === 3
				? 'Бонусная программа'
				: index === 4
				? 'ДМС'
				: ''}
		</h1>
	)
}

export default Price
