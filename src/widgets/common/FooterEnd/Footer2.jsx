import { NavLink } from 'react-router-dom'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'

const Footer2 = () => {
	const { width } = useWindowSize()
	return (
		<div className='container footer2-none'>
			<div
				className={`flex justify-start gap-20 items-start  my-11 ${
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
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						Адреса клиник
					</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						О стоматологии
					</NavLink>
				</div>

				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>Цены</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						Для иногородних
					</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						Новости
					</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						Вопросы и ответы
					</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>Врачи</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						Отзывы
					</NavLink>
				</div>
				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>Акции</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						Примеры работ
					</NavLink>
				</div>

				<div
					className={`flex flex-col gap-3 font-bold text-sm text-[#253F41] ${
						width <= 940 ? 'gap-2 text-xs' : ''
					}`}
				>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						Сертификаты
					</NavLink>
					<NavLink className={'1100:h-10 1200:h-auto text-left'}>
						Контакты
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Footer2
///////////////////////////////////////////
