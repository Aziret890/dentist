import * as React from 'react'
import styles from '../index.module.css'
import Cursor from '../../../images/header-logo-cursor.svg'
import TelIcon from '../../../images/TelIcon.svg'
import ClockIcon from '../../../images/header-clock.svg'
import EmailIcon from '../../../images/header-email.svg'
import Glass from '../../../images/Glass.svg'
import DropDown from '../../../features/DropDown'
import { IoIosArrowDown } from 'react-icons/io'

export const HeaderTopSlice = () => {
  const cityConfig = {
    links: ['Москва1', 'Москва2', 'Москва3'],
    initialSelectedItem: (
      <>
        Москва <IoIosArrowDown />
      </>
    ),
  }

  return (
    <div className={styles['top-slice']}>
      <div className={`container ${styles.container}`}>
        <div className={styles.cursor}>
          <img src={Cursor} alt="" />
          <DropDown width={40} {...cityConfig} />
        </div>
        <div className={`${styles.div} flex items-center gap-2`}>
          <img src={TelIcon} alt="" />
          <a href="tel:+8 (800) 200-45-65">8 (800) 200-45-65</a>
          <a href="tel:+8 (800) 200-45-65">Заказать звонок</a>
        </div>
        <div className={`${styles.div} flex items-center gap-2`}>
          <img src={ClockIcon} alt="" />
          <span>В будни с 9:00 до 18:00</span>
        </div>
        <div className={`${styles.div} flex items-center gap-2`}>
          <img src={EmailIcon} alt="" />
          <a href="mailto:Consult@clinic.ru">Consult@clinic.ru</a>
        </div>
        <div className={`${styles.div} flex items-center gap-2`}>
          <img src={Glass} alt="" />
          <span>Версия для слабовидящих</span>
        </div>
      </div>
    </div>
  )
}
