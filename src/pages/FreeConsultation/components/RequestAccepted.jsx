import { useConsultation } from '../../../entity/consultate/store'
import styles from '../page.module.scss'
import Accepted from './images/accepted.svg'

export default function RequestAccepted() {
	const { setRequest } = useConsultation()
	return (
		<div className={styles.request_accepted}>
			<img src={Accepted} alt='accepted' />
			<h4>Ваша заявка принята!</h4>
			<p>Мы свяжемся с вами, как только изучим предоставленную информацию</p>
			<button
				onClick={() =>
					setTimeout(() => {
						setRequest(false)
					}, 300)
				}
			>
				Хорошо
			</button>
		</div>
	)
}
