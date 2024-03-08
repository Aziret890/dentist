import { Link } from 'react-router-dom'
import Class from '../../../../shared/assets/images/header-class.svg'
import Facebook from '../../../../shared/assets/images/header-fasebook.svg'
import Instagram from '../../../../shared/assets/images/header-insta.svg'
import HeaderWhiteLogo from '../../../../shared/assets/images/header-logo-white.svg'
import VK from '../../../../shared/assets/images/header-vk.svg'
import Youtube from '../../../../shared/assets/images/header-you.svg'
import HeaderLogo from '../../../../shared/assets/images/header1-logo.png'
import styles from '../index.module.css'
//
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { useWindowSize } from '../../../../entity/hooks/useWindowSize'
import { useMoreDetail } from '../../../../entity/more_detail/store'
import DropDown from '../../../../features/DropDown'
import Medal from '../../../../shared/assets/images/medal.svg'
import Message from '../../../../shared/assets/images/message.icons.svg'
import Pencil from '../../../../shared/assets/images/pencil.svg'
import MoreDetail from '../../../MoreDetail'

// eslint-disable-next-line react/prop-types
export const HeaderCenterSlice = ({ isMenu, toggleIsMenu }) => {
	const { width } = useWindowSize()
	const dropDownConfig = {
		items: ['Оставить отзыв', 'Написать директору'],
		initialSelectedItem: (
			<>
				<img src={Message} alt='' />
				<span className='text-sm leading-4'>
					Оставить отзыв или написать директору
				</span>
			</>
		)
	}

	const { setModalContent } = useMoreDetail()

	return (
		<div className={styles['center-slice']}>
			<div className={`${styles.container}`}>
				<Link
					onClick={() => toggleIsMenu(false)}
					to={'/'}
					className={styles.logo}
				>
					<img src={width < 841 ? HeaderWhiteLogo : HeaderLogo} alt='logo' />
				</Link>
				<div className={styles.end}>
					<div className={styles['links']}>
						<img src={Class} alt='' />
						<img src={Instagram} alt='' />
						<img src={VK} alt='' />
						<img src={Facebook} alt='' />
						<img src={Youtube} alt='' />
					</div>
					<div className={styles.buttons}>
						<button>
							<img src={Medal} alt='' />
							Награды и сертификаты
						</button>
						<DropDown
							width={230}
							width2={230}
							className={styles.dropDown}
							{...dropDownConfig}
						/>
						<button
							onClick={() =>
								setModalContent(() => <div className='text-black'>Content</div>)
							}
						>
							<img src={Pencil} alt='' />
							Записаться на приём
						</button>
						<button onClick={() => toggleIsMenu()}>
							{isMenu ? <IoClose /> : <FiMenu />}
						</button>
					</div>
				</div>
			</div>
			<MoreDetail>
				Mujer uno dolor, más de poder mismo si. Molde síndrome león oficio mirar
				namibia sed paño enigma paloma alma cara permacultura vietnamita inmune
				montaña necesariamente, magma obcecado. Marejada paloma nascimiento
				quindío chicharra renuncia analfabeto sintió oficinista yugo suntuoso
				resiliencia mínima, laboral números verdades impedimento torre
				repugnante asunción animal corchea voluble fantasía? Alias verdades
				dolor autoinmune odio ventana, expedición materialidad magma dignísimo
				molestias dolores patrón columna voluble placenta séquito resiliencia
				asunción modo adiposidad ataque justo cábala décima represión oficio pan
				mosca. Manantial asunción suntuoso ataque trote síndrome oficinista
				excepción alma abogada desierto, león, cábala odio, planeador
				perspicacia incidente lejos voluble deletéreo.
			</MoreDetail>
		</div>
	)
}
