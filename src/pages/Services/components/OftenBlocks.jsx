import React, { useState } from 'react'

const OftenBlocks = ({ el }) => {
	const [blo, setBloc] = useState(false)
	return (
		<div>
			<div className=''>
				<div
					data-aos='fade-up'
					className='w-[672px] rounded-lg h-[72px] bg-[#F2FAFB] flex items-center justify-between px-11 text-sm font-bold text-[#253F41]'
				>
					<p>{el.question}</p>
					<button onClick={() => setBloc(!blo)} className=''>
						{blo ? (
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M12.3143 10.8H11.5H10.8H6V13.2H10.8H11.5H12.3143H13.2H18V10.8H13.2H12.3143Z'
									fill='#2CB2BB'
								/>
								<path
									d='M12 0C5.3832 0 0 5.3832 0 12C0 18.6168 5.3832 24 12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 0 12 0ZM12 21.6C6.7068 21.6 2.4 17.2932 2.4 12C2.4 6.7068 6.7068 2.4 12 2.4C17.2932 2.4 21.6 6.7068 21.6 12C21.6 17.2932 17.2932 21.6 12 21.6Z'
									fill='#2CB2BB'
								/>
							</svg>
						) : (
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M13.2 6H10.8V10.8H6V13.2H10.8V18H13.2V13.2H18V10.8H13.2V6Z'
									fill='#2CB2BB'
								/>
								<path
									d='M12 0C5.3832 0 0 5.3832 0 12C0 18.6168 5.3832 24 12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 0 12 0ZM12 21.6C6.7068 21.6 2.4 17.2932 2.4 12C2.4 6.7068 6.7068 2.4 12 2.4C17.2932 2.4 21.6 6.7068 21.6 12C21.6 17.2932 17.2932 21.6 12 21.6Z'
									fill='#2CB2BB'
								/>
							</svg>
						)}
					</button>
				</div>
				<p style={{ display: blo ? 'block' : 'none' }} className='m-4'>
					{el.answer}
				</p>
			</div>
		</div>
	)
}

export default OftenBlocks
