import React from 'react'
import teethshub from '../../../shared/assets/images/teethshub.png'
const Toothbrush = () => {
	return (
		<div className='container'>
			<h3 className='text-3xl font-bold text-[#253F41] text-center mt-20'>
				Уход за имплантами
			</h3>
			<h4 className='text-[#253F41] font-medium text-center my-7'>
				Импланты надо чистить также, как и здоровые зубы, не менее двух раз в
				день
			</h4>
			<div
				data-aos='fade-up'
				className='flex items-center justify-between my-11'
			>
				<div className='bg-[#2CB2BB] w-[284px] h-[80px] rounded-sm flex items-center px-5 font-bold text-sm text-white'>
					<h5>Зубная щётка</h5>
				</div>
				<div className='bg-[#F2FAFB] w-[284px] h-[80px] rounded-sm flex items-center px-5 font-bold text-[#2CB2BB] text-sm'>
					<h5>Ирригатор или поласкание</h5>
				</div>
				<div className='bg-[#F2FAFB] w-[284px] h-[80px] rounded-sm flex items-center px-5 font-bold text-[#2CB2BB] text-sm'>
					<h5>Зубная нить</h5>
				</div>
				<div className='bg-[#F2FAFB] w-[284px] h-[80px] rounded-sm flex items-center px-5 font-bold text-[#2CB2BB] text-sm'>
					<h5>Профессиональная чистка</h5>
				</div>
			</div>
			<div className='flex items-start justify-between mt-11'>
				<div data-aos='fade-down-right' className=''>
					<img src={teethshub} alt='img' />
				</div>
				<div data-aos='fade-down-left' className='w-[692px]'>
					<p>
						Очищать необходимо выступающую часть импланта, нижнюю часть импланта
						и десны. Проводить очищение импланта можно: традиционной зубной
						щеткой или электрической, имеющей мягкую щетину. Для очищения
						межзубных промежутков применяют специальные щетки, которые легко
						проникают в труднодоступные места. К таким щеткам относят щетки с
						пучковой насадкой.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Toothbrush
