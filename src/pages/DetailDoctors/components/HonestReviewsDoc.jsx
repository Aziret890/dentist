/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useMoreDetail } from '../../../entity/more_detail/store'
import styles from '../page.module.scss'
import { useAuth } from '../../../entity/auth/store'
import Cookies from 'js-cookie'
import axios from 'axios'

export default function HonestReviewsDoc({ doc, id }) {
	const { setModalContent } = useMoreDetail()
	const { setIsAuth } = useAuth()

	async function postReviewForDoctors(title) {
		try {
			const jwtToken = Cookies.get('jwt')
			if (!jwtToken) {
				alert('Нету токена')
				return
			}
			const { data } = await axios.post(
				`https://akmatovt.pythonanywhere.com/addReviewToDoctor/${id}`,
				{ title },
				{
					headers: {
						Authorization: `JWT ${jwtToken}`
					}
				}
			)
			if (data.title) {
				alert('Feedback successfully sent')
			}
		} catch (error) {
			console.log('err', error)
		}
	}

	async function postReviewToDoctors() {
		const cookies = Cookies.get('jwt')
		if (!cookies) {
			setIsAuth('in')
			return
		}

		setModalContent(() => (
			<div className='flex items-start pt-20 justify-center w-full h-full'>
				<CreateReview post={postReviewForDoctors} />
			</div>
		))
	}

	return (
		<section className='mb-20'>
			<h1 data-aos='fade-up'>Только честные отзывы о враче</h1>
			<div className={styles['reviews-content']}>
				<div className={styles['review-left']}>
					<div>
						<svg
							data-aos='fade-up'
							width='56'
							height='56'
							viewBox='0 0 56 56'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M49 35C49 36.2377 48.5083 37.4247 47.6332 38.2998C46.758 39.175 45.571 39.6667 44.3333 39.6667H16.3333L7 49V11.6667C7 10.429 7.49167 9.242 8.36683 8.36683C9.242 7.49167 10.429 7 11.6667 7H44.3333C45.571 7 46.758 7.49167 47.6332 8.36683C48.5083 9.242 49 10.429 49 11.6667V35Z'
								stroke='#2CB2BB'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<h3 data-aos='fade-up'>Мы за честность!</h3>
						<p className='flex gap-2 flex-col'>
							<span data-aos='fade-up'>
								Убедиться в наших отзывах легко — просто напишите пациентам,
								оставившим
							</span>
							<span data-aos='fade-up'>
								отзывы, и поинтересуйтесь о качестве услуг и сервиса нашей
								стоматологии
							</span>
						</p>
					</div>

					<div>
						<svg
							data-aos='fade-up'
							width='284'
							height='412'
							viewBox='0 0 284 412'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 39.1492C0 35.0775 3.05819 31.6554 7.10426 31.1995L275.104 1.00234C279.847 0.467911 284 4.179 284 8.95203V404C284 408.418 280.418 412 276 412H8.00001C3.58173 412 0 408.418 0 404V39.1492Z'
								fill='#2CB2BB'
							/>
						</svg>
						<svg
							data-aos='fade-up'
							width='56'
							height='56'
							viewBox='0 0 56 56'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M25.667 9.33301H9.33366C8.09598 9.33301 6.909 9.82467 6.03383 10.6998C5.15866 11.575 4.66699 12.762 4.66699 13.9997V46.6663C4.66699 47.904 5.15866 49.091 6.03383 49.9662C6.909 50.8413 8.09598 51.333 9.33366 51.333H42.0003C43.238 51.333 44.425 50.8413 45.3002 49.9662C46.1753 49.091 46.667 47.904 46.667 46.6663V30.333'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M43.167 5.83354C44.0953 4.90528 45.3542 4.38379 46.667 4.38379C47.9797 4.38379 49.2387 4.90528 50.167 5.83354C51.0953 6.76179 51.6167 8.02078 51.6167 9.33354C51.6167 10.6463 51.0953 11.9053 50.167 12.8335L28.0003 35.0002L18.667 37.3335L21.0003 28.0002L43.167 5.83354Z'
								stroke='white'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<p className='flex gap-2 flex-col'>
							<span data-aos='fade-up'>
								Оставьте свой отзыв. <br /> Это очень ценно для нас!
							</span>{' '}
							<span data-aos='fade-up'>
								Всего несколько слов <br /> о качестве, сервисе <br /> и
								результате.
							</span>
						</p>
						<button onClick={postReviewToDoctors}>
							Написать отзыв о враче
						</button>
					</div>
				</div>
				<ul className={styles['review-right']}>
					{doc?.review?.map((item, idx) => (
						<li
							data-aos='fade-up'
							data-aos-duration={idx * 500}
							className={styles.review}
							key={item?.id}
						>
							<div
								data-aos='fade-up'
								className='flex items-center justify-between w-full gap-5'
							>
								<div className='flex items-center gap-3'>
									<div className={styles['user_photo_url']}>
										{item?.user.image !== null ? (
											<img src={item?.user?.image} alt='' />
										) : (
											<div className='bg-[#2CB2BB]'>
												{item?.user.firstName.slice(0, 1)}
											</div>
										)}
									</div>
									<div className='flex flex-col items-start'>
										<h5>{item?.user.firstName}</h5>
										<span>{item?.date}</span>
									</div>
								</div>
								{item?.url_profile && (
									<div className={styles['profile_link']}>
										<span>ссылка на профиль в</span>
										<svg
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M3.5 18.6667V9.33333C3.5 6.11168 6.11168 3.5 9.33333 3.5H18.6667C21.8883 3.5 24.5 6.11168 24.5 9.33333V18.6667C24.5 21.8883 21.8883 24.5 18.6667 24.5H9.33333C6.11168 24.5 3.5 21.8883 3.5 18.6667Z'
												stroke='#2CB2BB'
												strokeWidth='1.5'
											/>
											<path
												d='M17.3204 10.1929L17.3203 10.1929L17.3165 10.2028L17.3165 10.2029L17.3165 10.203L17.3164 10.2031L17.3164 10.2032L17.3152 10.2062L17.3096 10.2207C17.3044 10.2341 17.2963 10.2547 17.2855 10.282C17.2637 10.3365 17.231 10.4172 17.188 10.5188C17.1019 10.7224 16.9757 11.0083 16.8165 11.3339C16.5778 11.8223 16.2752 12.379 15.9332 12.8786V10.6094C15.9332 10.3694 15.9089 10.0183 15.7032 9.72038C15.4486 9.35183 15.0611 9.25 14.7456 9.25H12.3387C11.6305 9.25 11.1991 9.83399 11.1991 10.3811C11.1991 10.6766 11.3087 10.8984 11.404 11.0476C11.4463 11.114 11.4923 11.1756 11.5234 11.2173L11.5254 11.22L11.5275 11.2228C11.5619 11.269 11.5868 11.3024 11.6115 11.3388C11.6836 11.4448 11.7845 11.6141 11.8075 12.0171V13.476C11.7858 13.4399 11.7638 13.4029 11.7416 13.3649C11.2967 12.6038 10.8158 11.5484 10.4571 10.4178L10.4571 10.4178L10.4566 10.4161C10.3794 10.1749 10.2625 9.85993 10.0207 9.61891C9.73372 9.3329 9.38198 9.25 9.05673 9.25H7.52512C7.18968 9.25 6.81002 9.33662 6.53693 9.64506C6.27872 9.93669 6.25 10.2805 6.25 10.4689C6.25 10.6757 6.30221 10.9686 6.38354 11.2914C6.46987 11.634 6.60346 12.0658 6.7965 12.5703C7.18254 13.5791 7.81109 14.8911 8.78929 16.3759C10.1496 18.488 12.1416 19.75 14.0892 19.75C14.5801 19.75 15.0772 19.7023 15.4419 19.4375C15.9038 19.1022 15.9332 18.6069 15.9332 18.3552V17.2916C16.0867 17.4166 16.293 17.6043 16.5628 17.8856C16.8079 18.1511 17.0027 18.3809 17.1692 18.5805C17.1986 18.6158 17.2278 18.651 17.2568 18.686C17.3862 18.8418 17.5108 18.992 17.6247 19.1155C17.7659 19.2688 17.9369 19.4341 18.1523 19.5562C18.3865 19.6888 18.6354 19.75 18.9028 19.75H20.4344C20.7643 19.75 21.202 19.6618 21.4977 19.2902C21.8 18.9103 21.7834 18.4511 21.6886 18.1002L21.6862 18.0914L21.6836 18.0826C21.5803 17.7338 21.3668 17.3697 21.133 17.0272C20.8922 16.6744 20.5893 16.2875 20.2579 15.8837C20.0566 15.6272 19.8134 15.3693 19.6218 15.1661L19.618 15.1621L19.6141 15.1579C19.5141 15.0519 19.4297 14.9624 19.36 14.8845C19.3253 14.8457 19.2979 14.8138 19.2768 14.7879C19.2762 14.7873 19.2757 14.7867 19.2752 14.7861L19.3289 14.7032C19.3815 14.6217 19.4564 14.5048 19.5469 14.3615C19.7275 14.0755 19.971 13.6829 20.2214 13.2584C20.4709 12.8354 20.7318 12.3731 20.9448 11.9492C21.1414 11.5581 21.3335 11.1303 21.4085 10.784C21.4734 10.5363 21.5249 10.1336 21.2873 9.76595C21.0176 9.34851 20.5627 9.25 20.2156 9.25H18.684C18.334 9.25 18.0193 9.35483 17.7664 9.56178C17.527 9.75762 17.3962 10.0015 17.3204 10.1929ZM15.9362 13.9425C15.9362 13.9425 15.936 13.9418 15.9358 13.9404L15.9362 13.9425ZM11.794 14.6825C11.7939 14.6824 11.7941 14.6815 11.7946 14.6797C11.7942 14.6816 11.794 14.6825 11.794 14.6825ZM12.4829 14.3676C12.4883 14.3706 12.4911 14.3725 12.4911 14.3727C12.4911 14.373 12.4884 14.3715 12.4829 14.3676ZM15.9407 16.7115C15.9412 16.7091 15.9412 16.7094 15.9406 16.7121L15.9407 16.7115ZM15.5542 17.047C15.5541 17.0468 15.5566 17.0471 15.5618 17.0487C15.5569 17.048 15.5542 17.0472 15.5542 17.047ZM15.5569 17.051C15.5569 17.051 15.5574 17.051 15.5586 17.0509L15.5569 17.051Z'
												stroke='#2CB2BB'
												strokeWidth='1.5'
											/>
										</svg>
									</div>
								)}
							</div>
							<p data-aos='fade-up' className={styles.review_description}>
								{item?.title}
							</p>
							{item.parent_review && (
								<p data-aos='fade-up' className={styles.response}>
									{item.parent_review}
								</p>
							)}
						</li>
					))}

					{doc?.review?.length > 3 && (
						<button className={styles.more_review}>Показать ещё отзыв</button>
					)}
				</ul>
			</div>
		</section>
	)
}

export function CreateReview({ post }) {
	const [title, setTitle] = useState('')

	return (
		<div className={`${styles.create_review}`}>
			<div className={styles.review_input_box}>
				<label htmlFor='title'>Title</label>
				<textarea
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
					name='title'
					id='title'
				/>
			</div>
			<button onClick={() => post(title)}>Отправить</button>
		</div>
	)
}
