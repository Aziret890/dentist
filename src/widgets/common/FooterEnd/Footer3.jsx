import { NavLink } from 'react-router-dom'
import './footer.css'
const Footer3 = () => {
	return (
		<div className='container footer3-none'>
			<hr className='w-full h-[1px] bg-black' />
			<div className='my-11 flex items-start justify-between hov'>
				<div className='flex flex-col w-[284px]'>
					<h3 className=' text-[#2CB2BB] font-bold mb-2'>Красивая улыбка</h3>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Профессиональная чистка зубов
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Отбеливание зубов
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Отбеливание Zoom
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Художественная реставрация зубов
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Виниры
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Брекеты
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Скайсы
					</NavLink>
				</div>
				<div className='flex flex-col w-[284px]'>
					<h3 className=' text-[#2CB2BB] font-bold mb-2'>Восстановить зуб</h3>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Имплантация зубов
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Коронка на зуб
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Мост из коронок
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Съемное протезирование зубов
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Виниры
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Художественная реставрация зубов
					</NavLink>
				</div>
				<div className='flex flex-col w-[284px]'>
					<h3 className=' text-[#2CB2BB] font-bold mb-2'>Вылечить зубы</h3>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Лечение зубов
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Лечение кариеса
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Лечение пульпита
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Лечение периодонтита
					</NavLink>
				</div>
				<div className='flex flex-col w-[284px]'>
					<h3 className=' text-[#2CB2BB] font-bold mb-2'>
						Восстановить все зубы
					</h3>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Все зубы за 1 день All-on-4
					</NavLink>
					<NavLink className='640:text-sm 540:text-xs my-[2px] 640:font-normal 540:font-medium leading-[20px]'>
						Имплантация All-on-6
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Footer3
