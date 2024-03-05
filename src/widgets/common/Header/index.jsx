import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { HeaderTopSlice } from './ui/HeaderTopSlice'
import { HeaderCenterSlice } from './ui/HeaderCenterSlice'
import HeaderBottomSlice from './ui/HeaderBottomSlice'
import HeaderMenu from './ui/HeaderMenu'

export default function Header() {
	const [isMenu, setIsMenu] = useState(false)

	const toggleIsMenu = d => {
		setIsMenu(prev => d || !prev)
	}

	useEffect(() => {
		if (isMenu) {
			document.querySelector('body').style.height = '100vh'
			document.querySelector('body').style.overflow = 'hidden'
		} else {
			document.querySelector('body').style.height = 'auto'
			document.querySelector('body').style.minHeight = '100vh'
			document.querySelector('body').style.overflow = 'auto'
		}
	}, [isMenu])

	return (
		<header className={styles.header}>
			<HeaderTopSlice />
			<HeaderCenterSlice isMenu={isMenu} toggleIsMenu={toggleIsMenu} />
			<HeaderBottomSlice />
			<HeaderMenu isMenu={isMenu} />
		</header>
	)
}
