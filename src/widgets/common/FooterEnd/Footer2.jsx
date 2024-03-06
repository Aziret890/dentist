import { NavLink } from 'react-router-dom'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'

const Footer2 = () => {
	const { width } = useWindowSize()
	return (
		<div className='container'>
			<div
				className={`flex justify-start gap-20 items-center my-11 ${
					width <= 940
						? 'flex-wrap gap-9 items-start justify-between px-3 mb-5'
						: ''
				}`}
			>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink>Адреса клиник</NavLink>
					<NavLink>О стоматологии</NavLink>
				</div>

				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink>Цены</NavLink>
					<NavLink>Для иногородних</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink>Новости</NavLink>
					<NavLink>Вопросы и ответы</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink>Врачи</NavLink>
					<NavLink>Отзывы</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink>Акции</NavLink>
					<NavLink>Примеры работ</NavLink>
				</div>

				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink>Сертификаты</NavLink>
					<NavLink>Контакты</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Footer2
///////////////////////////////////////////
