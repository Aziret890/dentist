import { TbUserSquare } from 'react-icons/tb'
import teeth from '../../../shared/assets/images/teeth.png'
const Year = () => {
	return (
		<div className='container font-bold '>
			<h1 className='text-3xl font-black my-11 text-center'>
				Имплантация зубов с тройной гарантией
			</h1>
			<div
				data-aos='zoom-in'
				data-aos-duration={1000}
				className='w-full h-[392px] bg-[#2CB2BB]'
			>
				<div className='flex items-start justify-between px-14'>
					<div className='w-[520px] h-[96px] my-11'>
						<div className=''>
							<h1 className='text-3xl text-white my-5'>
								Гарантия на импланты <br /> от 10 лет
							</h1>
							<div className='flex'>
								<div className=''>
									<div className='flex items-center  gap-4 my-5'>
										<div className='w-[34px] h-[34px] rounded-lg bg-white flex items-center justify-center text-[#2CB2BB]'>
											<TbUserSquare />
										</div>
										<h1 className='text-sm text-white'>
											Качественные <br /> материалы
										</h1>
									</div>
									<div className='flex items-center  gap-4 my-5'>
										<div className='w-[34px] h-[34px] rounded-lg bg-white flex items-center justify-center text-[#2CB2BB]'>
											<TbUserSquare />
										</div>
										<h1 className='text-sm text-white'>
											Качественные <br /> материалы
										</h1>
									</div>
								</div>
								<div className=''>
									<div className='flex items-center  gap-4 my-5 ml-11'>
										<div className='w-[34px] h-[34px] rounded-lg bg-white flex items-center justify-center text-[#2CB2BB]'>
											<TbUserSquare />
										</div>
										<h1 className='text-sm text-white'>
											Качественные <br /> материалы
										</h1>
									</div>
									<div className='flex items-center  gap-4 my-5 ml-11'>
										<div className='w-[34px] h-[34px] rounded-lg bg-white flex items-center justify-center text-[#2CB2BB]'>
											<TbUserSquare />
										</div>
										<h1 className='text-sm text-white'>
											Качественные <br /> материалы
										</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=''>
						<img src={teeth} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Year
