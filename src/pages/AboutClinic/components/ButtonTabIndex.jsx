/* eslint-disable react/prop-types */
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export default function ButtonTabIndex({ id }) {
	return (
		<div className='requits__block__btns flex justify-between'>
			<button
				className={clsx('flex items-center justify-center gap-4', {
					actives: !id || id === 1
				})}
			>
				<Link to={'/about/clinic'}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M9 22V18H15V22'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8 6H8.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M16 6H16.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12 6H12.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12 10H12.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12 14H12.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M16 10H16.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M16 14H16.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8 10H8.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8 14H8.01'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					О клинике
				</Link>
			</button>
			<button
				className={clsx('flex items-center justify-center gap-4', {
					actives: id === 2
				})}
			>
				<Link to={'/about/clinic?tabId=2'}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M14.2718 10.445L18 2L14.2718 10.445ZM9.31612 10.6323L5 2L9.31612 10.6323ZM12.7615 10.0479L8.835 2L12.7615 10.0479ZM14.36 2L13.32 4.5L14.36 2ZM6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Сертификаты
				</Link>
			</button>
			<button
				className={clsx('flex items-center justify-center gap-4', {
					actives: id === 3
				})}
			>
				<Link to={'/about/clinic?tabId=3'}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M16 16L19 8L22.001 16C21.1353 16.649 20.0825 16.9999 19.0005 16.9999C17.9185 16.9999 16.8657 16.649 16 16Z'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M2 16L5 8L8.001 16C7.1353 16.649 6.08248 16.9999 5.0005 16.9999C3.91852 16.9999 2.8657 16.649 2 16Z'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M7 21H17'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12 3V21'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M3 7H5C7 7 10 6 12 5C14 6 17 7 19 7H21'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Правовая информация
				</Link>
			</button>
			<button
				className={clsx('flex items-center justify-center gap-4', {
					actives: id === 4
				})}
			>
				<Link to={'/about/clinic?tabId=4'}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8 6H21'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8 12H21'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8 18H21'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M3 6H3.01'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M3 12H3.01'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M3 18H3.01'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Реквизиты
				</Link>
			</button>
			<button
				className={clsx('flex items-center justify-center gap-4', {
					actives: id === 5
				})}
			>
				<Link to={'/about/clinic?tabId=5'}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21'
							stroke='#2CB2BB'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					Вакансии
				</Link>
			</button>
		</div>
	)
}
