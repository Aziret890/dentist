import styles from '../index.module.css'
import HeaderLogo from '../../../images/header1-logo.png'
import HeaderWhiteLogo from '../../../images/header-logo-white.svg'
import Instagram from '../../../images/header-insta.svg'
import Youtube from '../../../images/header-you.svg'
import VK from '../../../images/header-vk.svg'
import Facebook from '../../../images/header-fasebook.svg'
import Class from '../../../images/header-class.svg'

//
import Pencil from '../../../images/pansle.svg'
import Medal from '../../../images/medal.svg'
import Message from '../../../images/message.icons.svg'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { useWindowSize } from '../../../hooks/useWindowSize'

// eslint-disable-next-line react/prop-types
export const HeaderCenterSlice = ({ isMenu, toggleIsMenu }) => {
  const { width } = useWindowSize()
  return (
    <div className={styles['center-slice']}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <img src={width < 850 ? HeaderWhiteLogo : HeaderLogo} alt="logo" />
        </div>
        <div className={styles.end}>
          <div className={styles['links']}>
            <img src={Class} alt="" />
            <img src={Instagram} alt="" />
            <img src={VK} alt="" />
            <img src={Facebook} alt="" />
            <img src={Youtube} alt="" />
          </div>
          <div className={styles.buttons}>
            <button>
              <img src={Medal} alt="" />
              Награды и сертификаты
            </button>
            <button>
              <img src={Message} alt="" />
              Оставить отзыв или написать директору
            </button>
            <button>
              <img src={Pencil} alt="" />
              Записаться на приём
            </button>
            <button onClick={() => toggleIsMenu()}>{isMenu ? <IoClose /> : <FiMenu />}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
