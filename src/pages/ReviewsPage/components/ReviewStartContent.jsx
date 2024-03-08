import { useCurrentUser } from '../../../entity/user/store'
import styles from '../page.module.scss'
import { useAuth } from '../../../entity/auth/store'

import Rectangle from './Rectangle.svg'
export default function ReviewStartContent() {
	const { currentUser } = useCurrentUser()
	const { setIsAuth } = useAuth()

	return (
		<div className={styles.start}>
			<div className={`${styles.container} container`}>
				<div className={styles.left}>
					<h1>Только честные отзывы</h1>
					<span>2 548 отзывов</span>
					<p>Всего несколько слов о качестве, сервисе и результате</p>
					<button
						onClick={() => {
							if (!currentUser) {
								setIsAuth(true)
							}
						}}
					>
						Оставить отзыв
					</button>
				</div>
				<div className={styles.right}>
					<img src={Rectangle} alt='rect' />
				</div>
			</div>
		</div>
	)
}
