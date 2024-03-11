import { Link, useNavigate } from 'react-router-dom'
import Class from '../../../../shared/assets/images/header-class.svg'
import Facebook from '../../../../shared/assets/images/header-fasebook.svg'
import Instagram from '../../../../shared/assets/images/header-insta.svg'
import HeaderWhiteLogo from '../../../../shared/assets/images/header-logo-white.svg'
import VK from '../../../../shared/assets/images/header-vk.svg'
import Youtube from '../../../../shared/assets/images/header-you.svg'
import HeaderLogo from '../../../../shared/assets/images/header1-logo.png'
import styles from '../index.module.scss'
//
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { useWindowSize } from '../../../../entity/hooks/useWindowSize'
import DropDown from '../../../../features/DropDown'
import Medal from '../../../../shared/assets/images/medal.svg'
import Message from '../../../../shared/assets/images/message.icons.svg'
import Pencil from '../../../../shared/assets/images/pencil.svg'

// eslint-disable-next-line react/prop-types
export const HeaderCenterSlice = ({ isMenu, toggleIsMenu }) => {
  const nav = useNavigate()
  function scroll1() {
    window.scrollTo({
      top: 3400,
      left: 0,
      behavior: 'smooth',
    })
  }
  const { width } = useWindowSize()

  const dropDownConfig = {
    items: ['Оставить отзыв', 'Написать директору'],
    initialSelectedItem: (
      <>
        <img src={Message} alt="" />
        <span className="text-sm leading-4">Оставить отзыв или написать директору</span>
      </>
    ),
  }

  return (
    <div className={styles['center-slice']}>
      <div className={`${styles.container}`}>
        <Link
          onClick={() => {
            window.scrollTo(0, 0)
          }}
          to={'/'}
          className={styles.logo}
        >
          <img src={width < 841 ? HeaderWhiteLogo : HeaderLogo} alt="logo" />
        </Link>
        <div className={styles.end}>
          <div className={styles['links']}>
            <img src={Class} alt="" />
            <img src={Instagram} alt="" />
            <img src={VK} alt="" />
            <img src={Facebook} alt="" />
            <img src={Youtube} alt="" />
          </div>
          <div className={styles.buttons}>
            <button onClick={() => nav('/about/clinic?tabId=2')}>
              <img src={Medal} alt="" />
              Награды и сертификаты
            </button>
            <DropDown width={230} width2={230} className={styles.dropDown} {...dropDownConfig} />
            <button onClick={() => scroll1()}>
              <img src={Pencil} alt="" />
              Записаться на приём
            </button>
            <button onClick={() => toggleIsMenu(true)}>
              {isMenu ? <IoClose style={{ color: '#2cb2bb' }} /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
