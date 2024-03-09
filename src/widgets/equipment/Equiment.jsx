import axios from 'axios'
import { useEffect, useState } from 'react'
import './Equiment.scss'
import clsx from 'clsx'
import { IoClose } from 'react-icons/io5'
import { useRef } from 'react'
import useOutsideClick from '../../entity/hooks/useOutsideClick'
function Equiment() {
	const [data, setData] = useState([])

	const [isEquipment, setIsEquipment] = useState(false)
	const outSideRef = useRef()

	useEffect(() => {
		axios('https://akmatovt.pythonanywhere.com/equipment/').then(res =>
			setData(res.data)
		)
	}, [])

	useOutsideClick(() => {
		setIsEquipment(false)
	}, outSideRef)

	return (
		<section className='equiment'>
			<div className='container'>
				<div className='equiment__title'>
					<h1>Работаем на профессиональном оборудовании</h1>
				</div>
				<div className='equiment__info'>
					<div className='equiment__info__img'>
						<img
							src={
								'https://akmatovt.pythonanywhere.com/media/' + data[0]?.image
							}
							alt=''
						/>
						<div
							className={clsx('more__equipment', {
								active: isEquipment
							})}
						>
							<div ref={outSideRef} className='more__equipment--body'>
								<button onClick={() => setIsEquipment(false)}>
									<IoClose />
								</button>
								<div className='more__equipment--content'>
									<p>
										Стоматологическая установка ESTETICA E30 - простая и удобная
										система для каждодневного использования. Всё необходимое у
										вас под рукой. Установка имеет отличный внешний вид и дарит
										вам ощущение комфорта. Данное изделие открывает новое
										измерение профессионального превосходства и отличается
										простотой использования, хорошо продуманной технологией и
										вниманием к деталям.
									</p>
									<h1>
										Модуль врача: комплектация и краткий обзор преимуществ
									</h1>
									<ul>
										<li>
											• Простота контроля функций благодаря кнопкам прямого
											выбора и удобным вспомогательным клавишам
										</li>
										<li>
											• Вся информация выводится на встроенный экран, она
											доступна всегда
										</li>
										<li>
											• Высокая скорость лечебных процедур и расслабленная
											рабочая поза врача благодаря удобному расположению всех
											органов управления
										</li>
										<li>
											• Простота контроля функций благодаря кнопкам прямого
											выбора и удобным вспомогательным клавишам
										</li>
										<li>
											• Вся информация выводится на встроенный экран, она
											доступна всегда
										</li>
										<li>
											• Высокая скорость лечебных процедур и расслабленная
											рабочая поза врача благодаря удобному расположению всех
											органов управления
										</li>
										<li>
											• Простота контроля функций благодаря кнопкам прямого
											выбора и удобным вспомогательным клавишам
										</li>
										<li>
											• Вся информация выводится на встроенный экран, она
											доступна всегда
										</li>
										<li>
											• Высокая скорость лечебных процедур и расслабленная
											рабочая поза врача благодаря удобному расположению всех
											органов управления
										</li>
										<li>
											• Простота контроля функций благодаря кнопкам прямого
											выбора и удобным вспомогательным клавишам
										</li>
										<li>
											• Вся информация выводится на встроенный экран, она
											доступна всегда
										</li>
										<li>
											• Высокая скорость лечебных процедур и расслабленная
											рабочая поза врача благодаря удобному расположению всех
											органов управления
										</li>
										<li>
											• Простота контроля функций благодаря кнопкам прямого
											выбора и удобным вспомогательным клавишам
										</li>
										<li>
											• Вся информация выводится на встроенный экран, она
											доступна всегда
										</li>
										<li>
											• Высокая скорость лечебных процедур и расслабленная
											рабочая поза врача благодаря удобному расположению всех
											органов управления
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='equiment__info__info'>
						<div className='equiment__info__info-block'>
							<h2>Стоматологическая установка Performer III</h2>
							<p>производитель США</p>
						</div>
						<div className='equiment__info__info-block'>
							<h2>Очки-бинокуляры MediPlus</h2>
							<p>производитель Ю. Корея</p>
						</div>
					</div>
				</div>
				<div className='equiment__btn'>
					<button onClick={() => setIsEquipment(true)}>Подробнее</button>
				</div>
			</div>
		</section>
	)
}

export default Equiment
