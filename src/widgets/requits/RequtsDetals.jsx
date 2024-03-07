/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Requits.scss'
function RequtsDetals({ el }) {
	const [thisTrue, setThisTrue] = useState(false)
	function copyToInfo(info) {
		setThisTrue(!thisTrue)
		navigator.clipboard.writeText(info)
	}
	function popUp() {
		setTimeout(() => setThisTrue(!thisTrue), 700)
	}
	return (
		<>
			<hr />
			<div
				className={`requits__copy__block-child mt-[30px] mb-[25px] flex items-center justify-between relative `}
			>
				<div className='requits__copy__block-child-name w-[30%]'>{el.name}</div>
				<div className='requits__copy__block-child-info absolute w-[40%] left-[40%]'>
					<p className={thisTrue == true ? `text-cyan-500 text-xl` : ''}>
						{el.info}
					</p>
				</div>
				<div
					onClick={() => copyToInfo(el.info)}
					onMouseLeave={() => popUp()}
					className='requits__copy__block-child-copy'
				>
					{thisTrue == false ? (
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M14.4 0H6.4C5.5176 0 4.8 0.7176 4.8 1.6V4.8H1.6C0.7176 4.8 0 5.5176 0 6.4V14.4C0 15.2824 0.7176 16 1.6 16H9.6C10.4824 16 11.2 15.2824 11.2 14.4V11.2H14.4C15.2824 11.2 16 10.4824 16 9.6V1.6C16 0.7176 15.2824 0 14.4 0ZM1.6 14.4V6.4H9.6L9.6016 14.4H1.6ZM14.4 9.6H11.2V6.4C11.2 5.5176 10.4824 4.8 9.6 4.8H6.4V1.6H14.4V9.6Z'
								fill='#2CB2BB'
							/>
						</svg>
					) : (
						<svg
							width='16.000000'
							height='16.000000'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
						>
							<desc>Created with Pixso.</desc>
							<defs />
							<path
								id='Vector'
								d='M14.3999 0L6.3999 0C5.51758 0 4.7998 0.71759 4.7998 1.60001L4.7998 4.79999L1.6001 4.79999C0.717773 4.79999 0 5.51761 0 6.39999L0 14.4C0 15.2824 0.717773 16 1.6001 16L9.6001 16C10.4824 16 11.2002 15.2824 11.2002 14.4L11.2002 11.2L14.3999 11.2C15.2822 11.2 16 10.4824 16 9.60001L16 1.60001C16 0.71759 15.2822 0 14.3999 0ZM1.6001 14.4L1.6001 6.39999L9.6001 6.39999L9.60156 14.4L1.6001 14.4ZM14.3999 9.60001L11.2002 9.60001L11.2002 6.39999C11.2002 5.51761 10.4824 4.79999 9.6001 4.79999L6.3999 4.79999L6.3999 1.60001L14.3999 1.60001L14.3999 9.60001Z'
								fill='#FFFFFF'
								fillOpacity='1.000000'
								fillRule='nonzero'
							/>
						</svg>
					)}
				</div>
			</div>
			<hr />
		</>
	)
}

export default RequtsDetals
