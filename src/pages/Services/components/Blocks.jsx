import React from 'react'

const Blocks = () => {
	return (
		<div className='container'>
			<h3 className='text-3xl font-bold text-[#253F41] my-20'>
				Этапы установки импланта
			</h3>
			<div className='flex items-center justify-between flex-wrap gap-9'>
				<div
					data-aos='fade-right'
					className='w-[370px] h-[128px] bg-[#F2FAFB] rounded-lg'
				>
					<div className='flex flex-col mx-9'>
						<h2 className='w-[32px] h-[32px] rounded-lg	mt-[-15px] bg-[#2CB2BB] flex items-center justify-center text-white font-bold text-sm'>
							1
						</h2>
						<h3 className='font-bold text-[#253F41] my-3'>
							Удаление испорченного зуба
						</h3>
						<h4 className='text-[#253F41] leading-4 text-sm	'>
							Удаляется зуб, который невозможно <br /> вылечить
						</h4>
					</div>
				</div>
				<div
					data-aos='fade-up'
					className='w-[370px] h-[128px] bg-[#F2FAFB] rounded-lg'
				>
					<div className='flex flex-col mx-9'>
						<h2 className='w-[32px] h-[32px] rounded-lg	mt-[-15px] bg-[#2CB2BB] flex items-center justify-center text-white font-bold text-sm'>
							2
						</h2>
						<h3 className='font-bold text-[#253F41] my-3'>
							Диагностический снимок
						</h3>
						<h4 className='text-[#253F41] leading-4 text-sm	'>
							Рентгеновский снимок верхнего <br /> и нижнего зубного ряда
						</h4>
					</div>
				</div>
				<div
					data-aos='fade-left'
					className='w-[370px] h-[128px] bg-[#F2FAFB] rounded-lg'
				>
					<div className='flex flex-col mx-9'>
						<h2 className='w-[32px] h-[32px] rounded-lg	mt-[-20px] bg-[#2CB2BB] flex items-center justify-center text-white font-bold text-sm'>
							3
						</h2>
						<h3 className='font-bold text-[#253F41] my-3'>
							Установка имплантата
						</h3>
						<h4 className='text-[#253F41] leading-4 text-sm	'>
							Сразу после удаления или в течение 1,5 - 3 месяцев
						</h4>
					</div>
				</div>
				<div
					data-aos='fade-right'
					className='w-[370px] h-[128px] bg-[#F2FAFB] rounded-lg'
				>
					<div className='flex flex-col mx-9'>
						<h2 className='w-[32px] h-[32px] rounded-lg	mt-[-20px] bg-[#2CB2BB] flex items-center justify-center text-white font-bold text-sm'>
							4
						</h2>
						<h3 className='font-bold text-[#253F41] my-3'>
							Формирование десны
						</h3>
						<h4 className='text-[#253F41] leading-4 text-sm	'>
							Формирование проходит вместе с установленным имплантом
						</h4>
					</div>
				</div>
				<div
					data-aos='fade-up'
					className='w-[370px] h-[128px] bg-[#F2FAFB] rounded-lg'
				>
					<div className='flex flex-col mx-9'>
						<h2 className='w-[32px] h-[32px] rounded-lg	mt-[-20px] bg-[#2CB2BB] flex items-center justify-center text-white font-bold text-sm'>
							5
						</h2>
						<h3 className='font-bold text-[#253F41] my-3'>Временная коронка</h3>
						<h4 className='text-[#253F41] leading-4 text-sm	'>
							Установка временной коронки на 1 - 2 недели, пока изготавливается
							постоянная
						</h4>
					</div>
				</div>
				<div
					data-aos='fade-left'
					className='w-[370px] h-[128px] bg-[#F2FAFB] rounded-lg'
				>
					<div className='flex flex-col mx-9'>
						<h2 className='w-[32px] h-[32px] rounded-lg	mt-[-20px] bg-[#2CB2BB] flex items-center justify-center text-white font-bold text-sm'>
							6
						</h2>
						<h3 className='font-bold text-[#253F41] my-3'>
							Установка постоянной коронки на имплант
						</h3>
						<h4 className='text-[#253F41] leading-4 text-sm	'>
							Наслаждаетесь превосходной улыбкой
						</h4>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blocks
