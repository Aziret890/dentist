import React from 'react'

const Stage = () => {
	return (
		<div className='container pt-20'>
			<h1 className='text-2xl font-bold my-11'>
				Что входит в имплантацию зубов
			</h1>
			<div
				data-aos='zoom-in-up'
				data-aos-duration={2000}
				className='w-full h-[304px] bg-[#F2FAFB]'
			>
				<div className='flex justify-between px-20 py-4'>
					<h1 className='ml-10 font-medium'>Этап</h1>
					<h1 className='mr-[224px] font-medium'>Цена, ₽</h1>
				</div>
				<hr className='w-[80%] h-[1px] bg-gray-200  mx-auto mb-7' />
				<div className='flex justify-between px-20 ml-10'>
					<div className=''>
						<div className='flex items-center gap-2 my-3'>
							<div className='w-[20px] h-[20px] rounded-full bg-[#2CB2BB] flex items-center justify-center text-white '>
								<h6 className='font-bold text-sm'>1</h6>
							</div>
							<h2 className='font-medium'>
								Операция по установке имплантата (хирургический этап)
							</h2>
						</div>
						<div className='flex items-center gap-2 my-3'>
							<div className='w-[20px] h-[20px] rounded-full bg-[#2CB2BB] flex items-center justify-center text-white '>
								<h6 className='font-bold text-sm'>2</h6>
							</div>
							<h2 className='font-medium'>Установка формирователя десны</h2>
						</div>
						<div className='flex items-center gap-2 my-3'>
							<div className='w-[20px] h-[20px] rounded-full bg-[#2CB2BB] flex items-center justify-center text-white '>
								<h6 className='font-bold text-sm'>3</h6>
							</div>
							<h2 className='font-medium'>Ортопедический этап</h2>
						</div>
						<div className='flex items-center gap-2 my-3'>
							<div className='w-[20px] h-[20px] rounded-full bg-[#2CB2BB] flex items-center justify-center text-white '>
								<h6 className='font-bold text-sm'>4</h6>
							</div>
							<h2 className='font-medium'>Индивидуальный титановый абатмент</h2>
						</div>
						<h1 className='font-bold ml-7'>Итого за все этапы:</h1>
					</div>
					<div className='mt-2'>
						<div className='flex flex-col gap-3'>
							<h2>26 000</h2>
							<h2>20 000</h2>
							<h2>20 000</h2>
							<h2>5 000</h2>
							<div className='flex items-center gap-4'>
								<h2 className='font-bold'>53 000</h2>
								<div className=' gap-3 w-[213px] h-[36px] bg-[#2CB2BB] flex items-center justify-between px-5'>
									<svg
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M9.99967 18.3334C9.99967 18.3334 16.6663 15.0001 16.6663 10.0001V4.16675L9.99967 1.66675L3.33301 4.16675V10.0001C3.33301 15.0001 9.99967 18.3334 9.99967 18.3334Z'
											stroke='white'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M7.5 9.99992L9.16667 11.6666L12.5 8.33325'
											stroke='white'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
									<h1 className='text-white font-medium'>Гарантия 20 лет</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stage
