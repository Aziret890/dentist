/* eslint-disable no-irregular-whitespace */
import { FaRegMap } from 'react-icons/fa'
import { FiMessageSquare } from 'react-icons/fi'
import './footer.css'
import './footerADAP.css'

const Footer = () => {
	return (
		<div className='bg-[#F2FAFB]'>
			<div className='container'>
				<div className='py-5 apa-py-3'>
					<div className='apa flex items-center justify-start flex-wrap gap-5'>
						<div className='w-[405px]'>
							<p className='text-sm'>
								Проконсультируем вас по условиям и стоимости лечения, подберём
								врача и запишем вас на приём.{' '}
							</p>
							<p className='mt-3 text-sm'>
								  Консультация займёт всего 30–40 минут.
							</p>
						</div>
						<div className='how bo w-[316px] h-[90px] bg-white flex items-center justify-center gap-5'>
							<span className='text-5xl text-[#2CB2BB]'>
								<FaRegMap />
							</span>
							<p className='text-[#2CB2BB] font-bold text-sm'>
								Ближайшие филиалы <br /> стоматологии
							</p>
						</div>
						<div className=' how bo w-[316px] h-[90px] bg-white flex items-center justify-center gap-5'>
							<span className='text-5xl text-[#2CB2BB]'>
								<FiMessageSquare />
							</span>
							<p className='text-[#2CB2BB] font-bold text-sm'>
								Отзывы о стоматологии <br /> и репутации
							</p>
						</div>{' '}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
