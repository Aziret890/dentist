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
				<svg
					width='582'
					height='290'
					viewBox='0 0 582 290'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						opacity='0.1'
						d='M291 0C130.285 0 0 129.837 0 290H582C582 129.837 451.715 0 291 0Z'
						fill='white'
					/>
				</svg>
			</div>
		</div>
	)
}
