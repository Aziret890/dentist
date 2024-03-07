import { NavLink } from 'react-router-dom'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'

const Footer2 = () => {
	const { width } = useWindowSize()
	return (
		<div className='container'>
			<div
				className={`flex justify-start gap-20 items-start my-11 ${
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
					<NavLink className={'1100:h-10 1200:h-auto'}>Адреса клиник</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto'}>О стоматологии</NavLink>
				</div>

				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto'}>Цены</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto'}>Для иногородних</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto'}>Новости</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto'}>
						Вопросы и ответы
					</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto'}>Врачи</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto'}>Отзывы</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto'}>Акции</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto'}>Примеры работ</NavLink>
				</div>

				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto'}>Сертификаты</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto'}>Контакты</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Footer2
///////////////////////////////////////////
