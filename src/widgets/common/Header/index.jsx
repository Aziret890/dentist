import { useState } from 'react'
import styles from './index.module.scss'
import { HeaderTopSlice } from './ui/HeaderTopSlice'
import { HeaderCenterSlice } from './ui/HeaderCenterSlice'
import HeaderBottomSlice from './ui/HeaderBottomSlice'
import HeaderMenu from './ui/HeaderMenu'
import HeaderServicesModal from './ui/HeaderServicesModal'

export default function Header() {
  const [isMenu, setIsMenu] = useState(false)
  const [isServiceModal, setIsServiceModal] = useState(false)

  const toggleIsMenu = (d) => {
    setIsMenu(() => d)
  }

  return (
    <header className={styles.header}>
      <div className={styles.last}>
        <HeaderTopSlice />
        <HeaderCenterSlice isMenu={isMenu} toggleIsMenu={toggleIsMenu} />
        <HeaderBottomSlice isServiceModal={isServiceModal} setIsServiceModal={setIsServiceModal} />
        <HeaderServicesModal isServiceModal={isServiceModal} setIsServiceModal={setIsServiceModal} />
        <HeaderMenu isMenu={isMenu} toggleIsMenu={toggleIsMenu} />
      </div>
    </header>
  )
}
