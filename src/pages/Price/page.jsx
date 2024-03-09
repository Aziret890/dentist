import { useLocation } from 'react-router-dom'
import ButtonRoutes from './components/detalPrice/ButtonRoutes'
import PriceSortAll from './components/PriceBetifulSmile'
import PriceReStart from './components/PriceReStart'
import clsx from 'clsx'
import PriceCure from './components/PriceCure'
import { useState } from 'react'
import SaleFiveButton from './components/detalPrice/SaleFiveButton'
import NoResultFound from '../NoResultFound/page'
import pngAziret from '../../shared/assets/images/png-aziret.png'

function PricePage() {
	const location = useLocation().search
	const searchParams = new URLSearchParams(location)
	const tabId = +searchParams.get('tabId')
	const [tabContentIndex, setTabContentIndex] = useState(0)

	return (
		<>
			<section className='price mt-[98px]'>
				<div className='container'>
					<div className='price__content'>
						<center>
							{' '}
							<h1>
								{!tabId
									? 'Цены'
									: tabId === 1
									? 'Акция'
									: tabId === 2
									? 'Рассрочка и кредит'
									: tabId === 3
									? 'Бонусная программа'
									: tabId === 4
									? 'ДМС'
									: ''}
							</h1>
						</center>
						<ButtonRoutes id={tabId} />
					</div>
					<div className='price__tab--content'>
						{tabId === 0 ? (
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
								{tabContentIndex == 1 ? (
									<PriceSortAll />
								) : tabContentIndex == 2 ? (
									<PriceReStart />
								) : tabContentIndex == 3 ? (
									<PriceCure />
								) : tabContentIndex == 0 ? (
									<PriceReStart />
								) : (
									''
								)}
							</>
						) : tabId === 1 ? (
							<SaleFiveButton />
						) : tabId === 2 ? (
							<section className='sale'>
								<div className='container'>
									<div className='sale__content'>
										<div className='sale__content__btns'>
											{/* <ButtonRoutes /> */}
										</div>
										<div className='sale__content__block flex justify-between'>
											<div className='sale__content__block-info'>
												<h2>Лечите зубы сейчас, оплачивайте потом</h2>
												<p>
													Объёмное стоматологическое лечение — серьёзная статья
													расходов, на которую не всегда есть возможность
													выделить всю сумму сразу. Отсутствие необходимых
													средств — не повод запускать здоровье. В «Нашей
													клинике» вы можете вылечить зубы в рассрочку без
													процентов. Стоматологические услуги стали ещё
													доступнее!
												</p>
												<h2>Лечение зубов в рассрочку</h2>
												<p>
													Стоимость зависит от диагноза, сложности случая и
													персональных особенностей. Изучите цены сейчас и
													запишитесь на индивидуальную консультацию, чтобы
													получить рекомендации врача и расчёт стоимости.
													Узнайте свою стоимость и получите скидку!
												</p>
												<h2>Рассрочка или кредит</h2>
												<p>
													Это отличная возможность заняться здоровьем полости
													рта даже в случае, когда нет полной суммы на
													стоматологические услуги. Процесс состоит из
													нескольких этапов:
												</p>
												<h3>КОНСУЛЬТАЦИЯ И ДИАГНОСТИКА</h3>
												<p>
													Врач-стоматолог проводит осмотр, выслушивает ваши
													пожелания и подбирает оптимальный вариант.
												</p>
												<h3>ЗАКЛЮЧЕНИЕ ДОГОВОРА</h3>
												<p>
													Заключается договор на необходимые процедуры, в
													котором подробно расписывается стоимость, количество
													платежей и их сумма.
												</p>
												<h3>ЛЕЧЕНИЕ ЗУБОВ</h3>
												<p>
													Назначается один или несколько приёмов в зависимости
													от сложности случая, затем доктор приступает к работе
													над зубами.
												</p>
												<h3>РЕКОМЕНДАЦИИ ПО УХОДУ</h3>
												<p>
													После окончания процедур врач даёт рекомендации по
													уходу за зубами в домашних условиях.
												</p>
											</div>
											<div className='flex flex-col items-center relative'>
												<div className='sale__content__block-img '>
													<img
														className='sale__content-block'
														src={pngAziret}
														alt=''
													/>
													<img
														className='sale__content-none'
														src={pngAziret}
														alt=''
													/>
												</div>
												<div className='sale__content__block-img2 absolute top-[175px]'>
													<h2>Запись на консультацию</h2>
													<p>
														Не откладывайте, запишитесь на консультацию прямо
														сейчас, перезвоним через 15 минут
													</p>
													<div className='flex justify-center mt-5'>
														<button>
															<div>
																<span>
																	<p>Бесплатная</p>
																	<p>:)</p>
																</span>
															</div>
															<div>
																<span>
																	<p>Thanks</p>
																	<p>:D</p>
																</span>
															</div>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						) : tabId === 3 ? (
							<NoResultFound />
						) : tabId === 4 ? (
							<NoResultFound />
						) : null}
					</div>
				</div>
			</section>
		</>
	)
}

export default PricePage
