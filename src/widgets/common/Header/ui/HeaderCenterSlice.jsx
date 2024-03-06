import HeaderLogo from '../../../../shared/assets/images/header1-logo.png'
import Class from '../../../../shared/assets/images/header-class.svg'
import Facebook from '../../../../shared/assets/images/header-fasebook.svg'
import Instagram from '../../../../shared/assets/images/header-insta.svg'
import HeaderWhiteLogo from '../../../../shared/assets/images/header-logo-white.svg'
import VK from '../../../../shared/assets/images/header-vk.svg'
import Youtube from '../../../../shared/assets/images/header-you.svg'
import styles from '../index.module.css'
import { Link } from 'react-router-dom'
//
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import Medal from '../../../../shared/assets/images/medal.svg'
import Message from '../../../../shared/assets/images/message.icons.svg'
import Pencil from '../../../../shared/assets/images/pencil.svg'
import { useWindowSize } from '../../../../entity/hooks/useWindowSize'
import DropDown from '../../../../features/DropDown'

// eslint-disable-next-line react/prop-types
export const HeaderCenterSlice = ({ isMenu, toggleIsMenu }) => {
	const { width } = useWindowSize()
	const dropDownConfig = {
		links: ['Оставить отзыв', 'Написать директору'],
		initialSelectedItem: (
			<>
				<img src={Message} alt='' />
				<span className='text-sm leading-4'>
					Оставить отзыв или написать директору
				</span>
			</>
		)
	}

	return (
		<div className={styles['center-slice']}>
			<div className={`${styles.container}`}>
				<Link to={'/'} className={styles.logo}>
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
						<button>
							<img src={Pencil} alt='' />
							Записаться на приём
						</button>
						<button onClick={() => toggleIsMenu()}>
							{isMenu ? <IoClose /> : <FiMenu />}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
