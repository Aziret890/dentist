import { NavLink } from 'react-router-dom'

const Footer2 = () => {
	return (
		<div className='container'>
			<div className='flex justify-start gap-20 items-center my-11'>
				<div className='flex flex-col gap-3 font-bold text-sm text-[#253F41]'>
					<NavLink>Адреса клиник</NavLink>
					<NavLink>О стоматологии</NavLink>
				</div>

				<div className='flex flex-col gap-3 font-bold text-sm text-[#253F41]'>
					<NavLink>Цены</NavLink>
					<NavLink>Для иногородних</NavLink>
				</div>
				<div className='flex flex-col gap-3 font-bold text-sm text-[#253F41]'>
					<NavLink>Новости</NavLink>
					<NavLink>Вопросы и ответы</NavLink>
				</div>
				<div className='flex flex-col gap-3 font-bold text-sm text-[#253F41]'>
					<NavLink>Врачи</NavLink>
					<NavLink>Отзывы</NavLink>
				</div>
				<div className='flex flex-col gap-3 font-bold text-sm text-[#253F41]'>
					<NavLink>Акции</NavLink>
					<NavLink>Примеры работ</NavLink>
				</div>

				<div className='flex flex-col gap-3 font-bold text-sm text-[#253F41]'>
					<NavLink>Сертификаты</NavLink>
					<NavLink>Контакты</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Footer2
///////////////////////////////////////////
