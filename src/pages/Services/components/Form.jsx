import axios from 'axios'
import { useState } from 'react'
function Form() {
	const [objDataNum, setObjDataNum] = useState('')
	const [objDataName, setObjDataName] = useState('')
	const [time, setTime] = useState(15)
	const TELEGRAM_CHAT_ID = '@messageAziret'
	const TELEGRAM_BOT_TOKEN = '7078287615:AAFDWtz-p3HpL28ItVtLyo-1_2l2MAQQPf8'
	const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
	async function sendMessageBot() {
		let res = {
			name: objDataName,
			number: objDataNum
		}
		let resMessage = `привет мененджер \n имя : '${res.name} \n нрмер: "${res.number}" \n напиши ему 🤗🤗🤗`
		axios.post(API, {
			chat_id: TELEGRAM_CHAT_ID,
			parse_mode: 'html',
			text: resMessage
		})
		var secs = 10
		var timer = setInterval(tick, 1000)
		function tick() {
			if (secs > 0) {
				setTime(--secs)
			}
		}
		setObjDataName('')
		setObjDataNum('')
	}
	return (
		<section className='pt-20'>
			<div className='container'>
				<div className='flex items-center justify-between w-full h-[356px] bg-[#2CB2BB] px-32 pb-8'>
					<div className=''>
						<img
							className='w-[306px] h-[388px]'
							// data-aos='fade-up'
							// data-aos-duration={300}
							src='https://s3-alpha-sig.figma.com/img/f29f/bb51/b9a2f9a3d87041a150e30461808f9fca?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfRIyToLtYdhD1RTf~uiVPym6KF0983R0PoxS~YD3ln9Li8ir7uUdmUEJRRU9SQr2RvdE7UoLOHHWByenYDnQjcbnfGc5-mQU0V~QSyVx8SO2YIdvi3P0yQgTl4ibsKVvzO7zLZLpJ85Ao4OlUEneOwX0-HWfaaBRcTQl~exjDiMUUGULrK-rq3Iz5A2oMADHrygV5bmx3DmEY0omcLSdzt92yPEvqWN7BDySyp1TANgM78wuwyY2lfjSm2vMqMxzjXTh1q-y2Kk2P5G-9v-tnhF4KwmkyMrHeGbaO~Knxa0WUoSBcm1di8R7PvLodgGR4JJJV7Ty4ozgTvWu0VcdA__'
							alt=''
						/>
					</div>
					<div className='mb-24'>
						<div className='from__child'>
							<h2 data-aos='fade-up' data-aos-duration={500}>
								Запись на консультацию
							</h2>
							<p>
								Не откладывайте, запишитесь на консультацию прямо сейчас,
								<br />
								перезвоним через 15 минут
							</p>
							<div className='from__input mb-[-20px]'>
								<input
									data-aos='fade-up'
									data-aos-duration={1 * 500}
									onChange={e => setObjDataName(e.target.value)}
									type='text'
									placeholder='Имя'
								/>
								<input
									data-aos='fade-up'
									data-aos-duration={2 * 500}
									onChange={e => setObjDataNum(e.target.value)}
									type='text'
									placeholder='Мобильный телефон'
								/>
							</div>

							<div
								className={`from__btn from__btn-${
									objDataName.length > 1 && objDataNum.length > 11
										? 'active'
										: ''
								} `}
							>
								{!objDataNum.length > 0 ? (
									<button data-aos='fade-up' data-aos-duration={2 * 500}>
										Отправить
									</button>
								) : (
									<button
										// data-aos='fade-up'
										// data-aos-duration={3 * 500}
										onClick={() => sendMessageBot()}
										className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500  group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white hover:scale-110 duration-200 my-7'
									>
										<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
											Узнать подробнее
										</span>
									</button>
								)}
								{/* <button onClick={() => sendMessageBot()}>Отправить</button> */}
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-between my-11'>
					<div
						data-aos='fade-right'
						className='w-[386px] h-[128px] bg-[#F2FAFB] flex items-center justify-center'
					>
						<div className='flex items-center justify-center gap-3'>
							<svg
								width='56'
								height='56'
								viewBox='0 0 56 56'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M49 35C49 36.2377 48.5083 37.4247 47.6332 38.2998C46.758 39.175 45.571 39.6667 44.3333 39.6667H16.3333L7 49V11.6667C7 10.429 7.49167 9.242 8.36683 8.36683C9.242 7.49167 10.429 7 11.6667 7H44.3333C45.571 7 46.758 7.49167 47.6332 8.36683C48.5083 9.242 49 10.429 49 11.6667V35Z'
									stroke='#2CB2BB'
									stroke-width='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<h4 className='text-sm font-bold'>Бесплатная консультация</h4>
						</div>
					</div>
					<div
						data-aos='zoom-in-up'
						className='w-[386px] h-[128px] bg-[#F2FAFB] flex items-center justify-center'
					>
						<div className='flex items-center justify-center gap-3'>
							<svg
								width='56'
								height='56'
								viewBox='0 0 56 56'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M44.3333 51.3335H11.6667C9.1 51.3335 7 49.2335 7 46.6668V14.0002C7 11.4335 9.1 9.3335 11.6667 9.3335H44.3333C46.9 9.3335 49 11.4335 49 14.0002V46.6668C49 49.2335 46.9 51.3335 44.3333 51.3335Z'
									stroke='#2CB2BB'
									stroke-width='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M37.333 4.6665V9.33317'
									stroke='#2CB2BB'
									stroke-width='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M18.667 4.6665V9.33317'
									stroke='#2CB2BB'
									stroke-width='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M28 32.6665C31.866 32.6665 35 29.5325 35 25.6665C35 21.8005 31.866 18.6665 28 18.6665C24.134 18.6665 21 21.8005 21 25.6665C21 29.5325 24.134 32.6665 28 32.6665Z'
									stroke='#2CB2BB'
									stroke-width='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M39.6663 43.1665C36.3997 40.8332 32.433 39.6665 27.9997 39.6665C23.5663 39.6665 19.5997 41.0665 16.333 43.1665'
									stroke='#2CB2BB'
									stroke-width='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>

							<h4 className='text-sm font-bold'>Помощь опытного врача</h4>
						</div>
					</div>
					<div
						data-aos='fade-left'
						className='w-[386px] h-[128px] bg-[#F2FAFB] flex items-center justify-center'
					>
						<div className='flex items-center justify-center gap-3'>
							<svg
								width='56'
								height='56'
								viewBox='0 0 56 56'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2.33301 28.0002C2.33301 28.0002 11.6663 9.3335 27.9997 9.3335C44.333 9.3335 53.6663 28.0002 53.6663 28.0002C53.6663 28.0002 44.333 46.6668 27.9997 46.6668C11.6663 46.6668 2.33301 28.0002 2.33301 28.0002Z'
									stroke='#2CB2BB'
									stroke-width='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M28 35C31.866 35 35 31.866 35 28C35 24.134 31.866 21 28 21C24.134 21 21 24.134 21 28C21 31.866 24.134 35 28 35Z'
									stroke='#2CB2BB'
									stroke-width='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>

							<h4 className='text-sm font-bold'>Бесплатный осмотр</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Form
