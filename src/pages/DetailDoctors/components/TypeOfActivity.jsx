/* eslint-disable react/prop-types */
import styles from '../page.module.scss'

export default function TypeOfActivity({ doc }) {
	return (
		<section id={'section0'} className='mb-20'>
			<h1 data-aos='fade-up'>Основные направления врача</h1>
			<ul className={styles['activity-content']}>
				{doc?.spec &&
					doc?.spec?.map((item, idx) => (
						<li data-aos-duration={idx * 500} data-aos='fade-up' key={idx}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M22.8888 5.13936C22.4164 3.10264 21.0399 1.6102 18.904 0.819284C17.4812 0.293788 14.016 -0.187012 12.4905 1.60615C7.57237 -1.30812 4.97904 0.279376 3.2351 2.15254C-0.614082 6.28719 1.14703 10.4525 2.79284 12.2608C3.98262 13.5704 4.32674 14.3277 4.51945 15.1926C4.56285 15.3829 4.66099 15.945 4.66585 16.0653C4.96997 23.2677 7.42581 23.8849 8.01301 23.9283C8.18418 23.9777 8.35276 24.0002 8.51584 24.0002C8.8151 24.0002 9.09866 23.9204 9.35599 23.7626C10.5757 23.0151 10.9516 20.688 11.282 18.6388C11.4021 17.8973 11.5142 17.1973 11.6452 16.79C11.8724 16.0849 12.0602 15.9241 12.0585 15.8996C12.2222 15.9725 12.4983 16.5001 12.5287 16.708C12.5741 17.0186 12.6066 17.4209 12.6431 17.8717C12.8314 20.185 13.1124 23.6737 15.5727 23.9264C15.7473 23.9638 16.1625 24.0023 16.6723 23.6946C17.832 22.9905 18.6908 20.9739 19.2222 17.7001L19.3021 17.1765C19.4935 15.8642 19.7586 14.0655 20.8425 12.9256C22.0949 11.6179 23.6065 8.23614 22.8888 5.13936ZM20.1158 12.2312C18.8103 13.604 18.5065 15.6668 18.3074 17.0334L18.2305 17.5402C17.6181 21.3062 16.707 22.443 16.2199 22.7863C15.9624 22.9677 15.8017 22.9421 15.8194 22.949L15.7051 22.9262C14.0563 22.7822 13.8137 19.7817 13.6541 17.7927C13.6146 17.3155 13.5801 16.8905 13.5328 16.5621C13.4844 16.2306 13.015 14.9665 12.1522 14.8946C11.2245 14.8324 10.8216 16.069 10.6894 16.4812C10.5346 16.9634 10.4207 17.6645 10.2896 18.479C10.0371 20.039 9.65655 22.3976 8.83113 22.9045C8.72004 22.9737 8.55357 23.0444 8.25382 22.9479L8.10143 22.9243H8.08815C8.06305 22.9243 5.95879 22.6699 5.67766 16.0237C5.66778 15.7919 5.54567 15.1382 5.50907 14.9725C5.24381 13.7874 4.71184 12.8683 3.54424 11.5844C3.15332 11.1564 -0.144129 7.27179 3.97873 2.84418C5.87296 0.809567 8.6679 -0.568057 15.0149 4.64431C15.2309 4.82034 15.5473 4.7907 15.7259 4.57467C15.9034 4.35881 15.8719 4.0427 15.6568 3.86376C14.8434 3.1977 14.0801 2.63123 13.3642 2.15723C14.5337 0.982843 17.2939 1.30235 18.5568 1.77068C20.3861 2.44711 21.5132 3.65745 21.9085 5.37045C22.5111 7.98254 21.2557 11.0351 20.1158 12.2312Z'
									fill='#2CB2BB'
								/>
							</svg>
							<span>{item?.title}</span>
						</li>
					))}
			</ul>
		</section>
	)
}
