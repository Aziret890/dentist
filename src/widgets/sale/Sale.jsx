<<<<<<< HEAD
import pngAziret from "../../shared/assets/images/png-aziret.png";
import "./Sale.scss";
// import ButtonRoutes from '../../app/routers/ButtonRoutes'
// import ButtonRoutes from '../../app/'
=======
import pngAziret from '../../shared/assets/images/png-aziret.png'
import './Sale.scss'
>>>>>>> 1b5acdc4070f9f21695d9e5a5f0bd8b91d77d74f
function Sale() {
	return (
		<section className='sale'>
			<div className='container'>
				<div className='sale__content'>
					<div className='sale__content__btns'>{/* <ButtonRoutes /> */}</div>
					<div className='sale__content__block flex justify-between'>
						<div className='sale__content__block-info'>
							<h2>Лечите зубы сейчас, оплачивайте потом</h2>
							<p>
								Объёмное стоматологическое лечение — серьёзная статья расходов,
								на которую не всегда есть возможность выделить всю сумму сразу.
								Отсутствие необходимых средств — не повод запускать здоровье. В
								«Нашей клинике» вы можете вылечить зубы в рассрочку без
								процентов. Стоматологические услуги стали ещё доступнее!
							</p>
							<h2>Лечение зубов в рассрочку</h2>
							<p>
								Стоимость зависит от диагноза, сложности случая и персональных
								особенностей. Изучите цены сейчас и запишитесь на индивидуальную
								консультацию, чтобы получить рекомендации врача и расчёт
								стоимости. Узнайте свою стоимость и получите скидку!
							</p>
							<h2>Рассрочка или кредит</h2>
							<p>
								Это отличная возможность заняться здоровьем полости рта даже в
								случае, когда нет полной суммы на стоматологические услуги.
								Процесс состоит из нескольких этапов:
							</p>
							<h3>КОНСУЛЬТАЦИЯ И ДИАГНОСТИКА</h3>
							<p>
								Врач-стоматолог проводит осмотр, выслушивает ваши пожелания и
								подбирает оптимальный вариант.
							</p>
							<h3>ЗАКЛЮЧЕНИЕ ДОГОВОРА</h3>
							<p>
								Заключается договор на необходимые процедуры, в котором подробно
								расписывается стоимость, количество платежей и их сумма.
							</p>
							<h3>ЛЕЧЕНИЕ ЗУБОВ</h3>
							<p>
								Назначается один или несколько приёмов в зависимости от
								сложности случая, затем доктор приступает к работе над зубами.
							</p>
							<h3>РЕКОМЕНДАЦИИ ПО УХОДУ</h3>
							<p>
								После окончания процедур врач даёт рекомендации по уходу за
								зубами в домашних условиях.
							</p>
						</div>
						<div className='flex flex-col items-center relative'>
							<div className='sale__content__block-img '>
								<img className='sale__content-block' src={pngAziret} alt='' />
								<img className='sale__content-none' src={pngAziret} alt='' />
							</div>
							<div className='sale__content__block-img2 absolute top-[175px]'>
								<h2>Запись на консультацию</h2>
								<p>
									Не откладывайте, запишитесь на консультацию прямо сейчас,
									перезвоним через 15 минут
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
	)
}

export default Sale
