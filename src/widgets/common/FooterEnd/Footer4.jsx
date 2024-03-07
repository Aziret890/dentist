import { CiClock2 } from 'react-icons/ci'
import { GoPencil } from 'react-icons/go'
import { MdEmail, MdOutlinePhoneInTalk } from 'react-icons/md'
import { PiMessengerLogoLight } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import ok from '../../../shared/assets/images/header-class.svg'
import facebook from '../../../shared/assets/images/header-fasebook.svg'
import instagram from '../../../shared/assets/images/header-insta.svg'
import youtube from '../../../shared/assets/images/header-you.svg'
import vk from '../../../shared/assets/images/vkkk.svg'
import './footer.css'
import './footerADAP4.css'

const Footer4 = () => {
	return (
		<div className='container'>
			<div className='zz flex items-start justify-between my-11'>
				<div className='m-5 w 840:min-w-[180px] 1000:w-[300px] 1100:w-[220px] w-[284px]'>
					<h1>Москва</h1>
					<h3 className='text-xs'>ул. Терешковой, 15Б</h3>
					<p className='df text-xs text-[#253F41] my-11'>
						© 2008—2021 Название клиники <br />
						Все права защищены
					</p>
					<div className='fd mt-5'>
						<div className='flex items-start gap-3'>
							<span className='mt-1'>
								<MdOutlinePhoneInTalk />
							</span>
							<div className=''>
								<h1 className='text-[#2CB2BB] font-bold'>8 (800) 200-45-65</h1>
								<h4 className='text-xs'>Горячая линия</h4>
							</div>
						</div>

						<div className='flex items-start gap-3 mt-3'>
							<span className='mt-1'>
								<MdOutlinePhoneInTalk />
							</span>
							<div className=''>
								<h1 className='text-[#2CB2BB] font-bold'>8 (800) 200-45-65</h1>
								<h4 className='text-xs'>Горячая линия</h4>
							</div>
						</div>

						<h3 className='text-[#2CB2BB] text-xs font-medium ml-[27px] my-3'>
							Заказать звонок
						</h3>
						<div className=''>
							<div className=' flex items-center gap-3'>
								<span>
									<CiClock2 />
								</span>
								<h3 className='text-xs'>В будни с 9:00 до 18:00</h3>
							</div>
							<div className=' flex items-center gap-3 my-3'>
								<span>
									<MdEmail />
								</span>
								<h3 className='text-xs text-[#2CB2BB]'>consult@clinic.ru</h3>
							</div>
						</div>
					</div>
				</div>
				<div className='df m-5 1100:w-auto w-[284px]'>
					<div className='flex items-start gap-3'>
						<span className='mt-1'>
							<MdOutlinePhoneInTalk />
						</span>
						<div className=''>
							<h1 className='text-[#2CB2BB] font-bold'>8 (800) 200-45-65</h1>
							<h4 className='text-xs'>Горячая линия</h4>
						</div>
					</div>

					<div className='flex items-start gap-3 mt-3'>
						<span className='mt-1'>
							<MdOutlinePhoneInTalk />
						</span>
						<div className=''>
							<h1 className='text-[#2CB2BB] font-bold'>8 (800) 200-45-65</h1>
							<h4 className='text-xs'>Горячая линия</h4>
						</div>
					</div>

					<h3 className='text-[#2CB2BB] text-xs font-medium ml-[27px] my-3'>
						Заказать звонок
					</h3>
					<div className=''>
						<div className=' flex items-center gap-3'>
							<span>
								<CiClock2 />
							</span>
							<h3 className='text-xs'>В будни с 9:00 до 18:00</h3>
						</div>
						<div className=' flex items-center gap-3 my-3'>
							<span>
								<MdEmail />
							</span>
							<h3 className='text-xs text-[#2CB2BB]'>consult@clinic.ru</h3>
						</div>
					</div>
				</div>
				<div className='m-5 840:max-w-[140px] 1100:w-auto 1200:w-[284px]'>
					<div className='flex items-center flex-col gap-4 mr-11'>
						<button className='how cursor-pointer  p-[2px] bg-black rounded-[5px] bg-gradient-to-t from-[#2CB2BB] to-[#2CB2BB] active:scale-95'>
							<span className='w-[240px] h-full text-sm font-medium flex items-center gap-2 px-4 py-3 bg-[#2CB2BB] text-[white] rounded-[5px] from-[#2CB2BB] to-[#2CB2BB]'>
								<span className='mr-2'>
									<GoPencil />
								</span>
								Записаться на приём
							</span>
						</button>
						<button className='how cursor-pointer flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[5px] bg-gradient-to-t from-[#F2FAFB] to-[#F2FAFB] active:scale-95'>
							<span className='w-[240px] h-full text-xs text-start  font-medium flex gap-2 px-2 py-3 bg-[#F2FAFB] text-[#2CB2BB] rounded-[5px] from-[#2CB2BB] to-[#2CB2BB]'>
								<span className='text-2xl mr-2'>
									{' '}
									<PiMessengerLogoLight />
								</span>
								Оставить отзыв <br /> или написать директору{' '}
							</span>
						</button>
					</div>
				</div>
				<div className='m-5 1100:w-[260px] 1200:w-[284px]'>
					<h3 className='text-sm font-bold text-[#253F41]'>
						Подписывайте на нас в соцсетях, чтобы быть в курсе всех собтиый
					</h3>
					<div className='flex items-center gap-2 my-2'>
						<div className='parent'>
							<div className='child child-1'>
								<button className='button btn-1'>
									<img src={ok} alt='img' />
								</button>
							</div>
							<div className='child child-2'>
								<button className='button btn-2' />
								<img src={instagram} alt='img' />
							</div>
							<div className='child child-3'>
								<button className='button btn-3' />
								<img src={vk} alt='img' />
							</div>
							<div className='child child-4'>
								<button className='button btn-4' />
								<img src={facebook} alt='img' />
							</div>
							<div className='child child-4'>
								<button className='button btn-4' />
								<img src={youtube} alt='img' />
							</div>
						</div>
					</div>
					<div className='mt-6'>
						<NavLink className='text-[#2CB2BB] text-sm '>
							Политика конфиденциальности
						</NavLink>
						<NavLink className='text-[#2CB2BB] text-sm'>Карта сайта</NavLink>
					</div>
					<div className='ds w-[284] ml-3'>
						<p className='text-xs text-[#253F41] my-11'>
							© 2008—2021 Название клиники <br />
							Все права защищены
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer4
