import { useEffect } from 'react'
import './Doctors.css'
import { FaArrowRight } from 'react-icons/fa'
import { PiChatCircleText } from 'react-icons/pi'
import { FaPlayCircle } from 'react-icons/fa'
import { useMyContext } from '../../context/MyContext'

const Doctors = () => {
	const { doctors, getDoctors } = useMyContext()
	useEffect(() => {
		getDoctors()
	}, [])
	console.log(doctors)
	return (
		<div id='doctors'>
			<div className='container'>
				<div className='doctors-title'>
					<h1>Наши доктора</h1>
					<p>
						Все врачи <FaArrowRight style={{ marginLeft: '8px' }} />
					</p>
				</div>
				<div className='doctors'>
					{doctors.map(el => (
						<div key={el.id} className='doctor'>
							<img src={el.photo} alt='image :/' />
							<div className='doctor-title'>
								<div className='exp-cut'></div>
								<div className='experience'>
									<h3>{el.experience}</h3>
									<p>Лет стажа</p>
								</div>
								<h3 className='title-doctor'>{el.name}</h3>
								<p className='description-doctor'>{el.speciality}</p>
								<div className='rate-doctor'>
									<p>
										<PiChatCircleText style={{ marginRight: '10px' }} /> Отзывы
									</p>
									<FaPlayCircle
										style={{ fontSize: '32px', color: '#2cb2bb' }}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Doctors
