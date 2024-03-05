import { useState } from 'react'
import './Form.css'
import form1photo from '../../../shared/assets/images/from1photo.svg'
import axios from 'axios'
function Form1Home() {
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
		<section className='from1__home'>
			<div className='container'>
				<div className='from1__content'>
					<div className='from1__images'>
						<img src={form1photo} alt='' />
					</div>
					<div className='from1__from'>
						<div className='from__child'>
							<h2>Остались вопросы? Мы ответим!</h2>
							<div className='from__input'>
								<input
									onChange={e => setObjDataName(e.target.value)}
									type='text'
									placeholder='Kubanychbekov Aziret'
								/>
								<input
									onChange={e => setObjDataNum(e.target.value)}
									type='text'
									placeholder='+7 000 000-00-00'
								/>
							</div>
							{time > 0 ? (
								<p>Перезвоним через {time} секунд</p>
							) : (
								<p>Перезвонить еще раз</p>
							)}
							<div
								className={`from__btn from__btn-${
									objDataName.length > 1 && objDataNum.length > 11
										? 'active'
										: ''
								} `}
							>
								{!objDataNum.length > 0 ? (
									<button>Отправить</button>
								) : (
									<button
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
			</div>
		</section>
	)
}

export default Form1Home
