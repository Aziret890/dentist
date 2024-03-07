import { AiOutlineLike } from 'react-icons/ai'
import { FiMessageSquare, FiTag } from 'react-icons/fi'
import { LuShieldCheck } from 'react-icons/lu'
import { TbUserSquare } from 'react-icons/tb'
import './our.css'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'

const Our = () => {
	const { width } = useWindowSize()
	return (
		<div className='container'>
			<div className='py-11 740:py-5 540:py-0'>
				<div
					className={`our flex items-center my-11 ${
						width <= 840 ? 'flex-wrap gap-5' : 'flex-wrap gap-3'
					}`}
					style={{
						justifyContent: width <= 840 ? 'flex-start' : 'space-between'
					}}
				>
					<h2 className='text-3xl font-bold text-left'>Наши преимущества</h2>
					<div className='flex items-center gap-5'>
						<h1 className='text-[#2CB2BB] text-4xl font-bold'>10 000</h1>

						<h5 className='text-lg font-medium '>
							Довольных <br /> клиентов
						</h5>
					</div>
					<div className='flex items-center gap-5'>
						<h1 className='text-[#2CB2BB] text-4xl font-bold'>3 650</h1>
						<h5 className='text-lg font-medium '>
							Дней успешной <br /> работы
						</h5>
					</div>
					<div className='flex items-center gap-5'>
						<h1 className='text-[#2CB2BB] text-4xl font-bold'>28</h1>
						<h5 className='text-lg font-medium '>
							Опытных <br /> сотрудников
						</h5>
					</div>
				</div>
				<div className='flex items-center flex-wrap gap-4'>
					<div
						data-aos='zoom-out-up'
						data-aos-duration={1000}
						className='doctor'
					>
						<h1>
							<TbUserSquare />
						</h1>
						<h2>Опытные врачи</h2>
					</div>
					<div
						data-aos='zoom-out-up'
						data-aos-duration={1500}
						className='doctor'
					>
						<h1>
							<LuShieldCheck />
						</h1>
						<h2>Опытные врачи</h2>
					</div>
					<div
						data-aos='zoom-out-up'
						data-aos-duration={1700}
						className='doctor'
					>
						<h1>
							<FiMessageSquare />
						</h1>
						<h2>Опытные врачи</h2>
					</div>
					<div
						data-aos='zoom-out-up'
						data-aos-duration={1800}
						className='doctor'
					>
						<h1>
							<FiTag />
						</h1>
						<h2>Опытные врачи</h2>
					</div>
					<div
						data-aos='zoom-out-up'
						data-aos-duration={2000}
						className='doctor'
					>
						<h1>
							<AiOutlineLike />
						</h1>
						<h2>Опытные врачи</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Our
