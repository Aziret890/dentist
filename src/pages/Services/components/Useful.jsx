import React from 'react'
import './useful.css'

const Useful = () => {
	return (
		<div className='container'>
			<h1 className='font-bold text-3xl text-[#253F41] my-11'>
				Полезная информация
			</h1>
			<div
				data-aos='zoom-in-up'
				className='flex items-center justify-center gap-5'
			>
				<div className='w-[590px] h-[590px] bg-[#2CB2BB] rounded-lg flex items-center justify-center'>
					<div className='flex flex-col items-center justify-center gap-4'>
						<svg
							width='96'
							height='96'
							viewBox='0 0 96 96'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='48' cy='48' r='44' fill='#F85D5D' />
							<circle
								cx='48'
								cy='48'
								r='46'
								stroke='white'
								stroke-opacity='0.8'
								stroke-width='4'
							/>
							<g clip-path='url(#clip0_104_2141)'>
								<path
									d='M74.0001 34.1615C73.7707 20.715 55.6246 17.3677 50.5103 29.5993C48.4872 30.0558 46.3681 30.997 44.4294 31.5403C39.8071 29.471 34.4341 28.181 29.6133 30.693C29.112 30.9447 28.9097 31.555 29.1614 32.0564C29.413 32.5576 30.0234 32.76 30.5249 32.5083C35.0781 30.3947 38.611 31.2932 43.9295 33.5396C45.9024 34.4184 47.8952 34.8437 49.664 35.1484C50.1434 42.3668 57.3764 47.7482 64.4927 46.0524C63.1589 53.9787 57.2653 53.2897 56.9191 60.7459C56.8955 60.973 56.8705 61.2111 56.8426 61.4621L56.0346 66.7113C55.47 70.379 54.2515 71.944 51.9603 71.944C50.7122 71.944 50.0126 71.2944 49.7585 69.8996L48.4286 62.5988C47.773 58.9988 45.5873 58.4613 44.3427 58.4613C43.0982 58.4613 40.9126 58.9988 40.2568 62.5988L38.927 69.8997C38.6729 71.2945 37.9732 71.9441 36.7252 71.9441C34.4338 71.9441 33.2153 70.3792 32.6508 66.7114L31.8428 61.4624C31.8149 61.2113 31.79 60.9731 31.7663 60.7459C31.4457 57.6834 31.1848 56.3141 27.9025 53.1414C24.0044 49.5238 23.0627 43.4827 25.0207 38.6755C25.2277 38.1543 24.9729 37.5638 24.4517 37.3567C23.9306 37.1495 23.3399 37.4043 23.1328 37.9256C20.8691 43.4851 22.0028 50.4265 26.4908 54.602C29.3724 57.3875 29.4665 58.287 29.7461 60.9574C29.7708 61.1949 29.797 61.4443 29.8263 61.7077C29.8278 61.7219 29.8296 61.736 29.8319 61.7501L30.6432 67.0204C30.908 68.7406 31.7138 73.9754 36.7253 73.9754C38.9649 73.9754 40.4958 72.6226 40.9254 70.2637L42.2552 62.9628C42.7053 60.4926 43.9377 60.4926 44.3427 60.4926C44.7477 60.4926 45.9802 60.4926 46.4302 62.9628L47.7601 70.2637C48.1897 72.6226 49.7206 73.9754 51.9603 73.9754C56.9718 73.9754 57.7775 68.7406 58.0423 67.0204L58.8536 61.7501C58.8558 61.736 58.8577 61.7219 58.8592 61.7077C58.8885 61.4444 58.9147 61.195 58.9395 60.9574C59.219 58.287 59.3131 57.3875 62.1947 54.602C64.7437 52.1382 66.308 48.8688 66.6264 45.3582C70.9596 43.4879 74.0001 39.1731 74.0001 34.1615ZM49.8384 31.881C49.7632 32.2767 49.7072 32.6791 49.6713 33.0873C48.9954 32.966 48.2905 32.8238 47.5744 32.6418C48.3216 32.3769 49.0841 32.1073 49.8384 31.881ZM61.8122 44.318C56.2118 44.318 51.6557 39.7618 51.6557 34.1615C52.2136 20.6875 71.4129 20.6914 71.9688 34.1616C71.9688 39.7618 67.4126 44.318 61.8122 44.318Z'
									fill='white'
								/>
								<path
									d='M67.729 31.2889C67.729 30.4734 67.4129 29.7083 66.8389 29.1344C65.6509 27.9465 63.7179 27.9464 62.5298 29.1344L61.8118 29.8525L61.0936 29.1344C59.9634 27.9555 57.9148 27.9556 56.7845 29.1344C55.6057 30.2646 55.6057 32.3133 56.7845 33.4435L57.5027 34.1617L56.7845 34.8798C55.6056 36.01 55.6057 38.0587 56.7845 39.1889C57.9148 40.3676 59.9634 40.3677 61.0936 39.1889L61.8118 38.4708L62.5298 39.1889C63.7178 40.3768 65.6508 40.3769 66.8389 39.1889C68.0177 38.0587 68.0177 36.0099 66.8389 34.8798L66.1208 34.1617L66.8389 33.4435C67.4128 32.8695 67.729 32.1043 67.729 31.2889ZM63.9663 34.8797L65.4026 36.3162C65.7934 36.6903 65.7934 37.3784 65.4026 37.7525C65.0067 38.1487 64.3623 38.1484 63.9663 37.7525L62.5299 36.3162C62.1517 35.9227 61.4718 35.9228 61.0935 36.3162L59.6571 37.7526C59.283 38.1433 58.5948 38.1433 58.2207 37.7526C57.8299 37.3785 57.8299 36.6903 58.2207 36.3163L59.6572 34.8799C60.0505 34.5017 60.0505 33.8217 59.6572 33.4435L58.2207 32.0071C57.8299 31.6331 57.8299 30.945 58.2207 30.5708C58.5948 30.1801 59.283 30.18 59.6571 30.5708L61.0935 32.0071C61.4717 32.4005 62.1517 32.4005 62.5299 32.0071L63.9663 30.5708C64.9616 29.6568 66.3115 31.0162 65.4026 32.0071L63.9663 33.4435C63.5697 33.84 63.5697 34.483 63.9663 34.8797Z'
									fill='white'
								/>
								<path
									d='M26.454 35.4114C27.8015 35.3577 27.8005 33.4333 26.454 33.3801H26.4532C25.1057 33.434 25.1076 35.3584 26.454 35.4114Z'
									fill='white'
								/>
							</g>
							<defs>
								<clipPath id='clip0_104_2141'>
									<rect
										width='52'
										height='52'
										fill='white'
										transform='translate(22 22)'
									/>
								</clipPath>
							</defs>
						</svg>
						<h1 className='text-2xl text-white font-bold'>
							Чем грозит потеря <br /> даже одного зуба?
						</h1>
						<p className='text-white text-sm'>
							Узнайте, как сэкономить деньги <br /> на протезировании зубов
						</p>
						<button className='btn'>Узнать подробнее</button>
					</div>
				</div>
				<div className=''>
					<div className='flex flex-col gap-5'>
						<img
							className='w-[284px] h-[284px] rounded-sm object-cover'
							src='https://s3-alpha-sig.figma.com/img/b883/661f/c7613c18e8548b466c49627516831a25?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ToCJvXdxe3fkAZtJr6XCw0dkz2tFbD5clgqE2QalUrrULJfTdG08tfV6spfaKaRyrwmNfi6Ya8XjU9s2SPqXkAgz9t8qKluY4w159M9UBoZ9636joXQBqDvC4G8BlLhWw1qaExTBMc1r5LoSNfoHVUF4paIiypIg0g1ayTzwCyvwg0SQdz1XuvEM32aLbvZDTczjT1F1rgdAmwdymVHzZEBLTQFs15Wd-XJjE-vabIYHp92Y4gzpujeIBCzSH5hswcLB0AMP0yeZRAvSAYRYkQC1QM5KSkaFZY7GCsO-mUkdNNAp8kFSI2ADJ~pvVRWGQYh8F5qCsH6GlyYPbBlnWA__'
							alt='img'
						/>
						<img
							className='w-[284px] h-[284px] rounded-sm object-cover'
							src='https://s3-alpha-sig.figma.com/img/c655/6fce/4ca1994268696b11334060e9eee44c0e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmnUcTgoFwx-kE~j4tRStEgmDpD5lqG4~lcugm9YabKg4Gx-tbhFMNfMpcC2R74hkeYA99hmtXdV3jXL9GI9oDnxSXoMmCiAXyajvm4S3YTzKF~n9zBDyJwAYwu6M4ZsjqBgHc6VpfAHzqRkPsUdgRCC7snMuNoxma~GcItEA7yX-cfDPYzfElD7TAMb42X0QRvosY1rdJfm0r~u0kIpq15Dn6bux3-OjlhfJjJuLKd0QQMjyehbcWyaLF4ILlA0toTl2N4U4KFGXng9MEKC7EVdpr2mw0zas3KNWFbXW6S~MvmEbwsa9UQdPfxVey4L6sjJqjMpWWvw9csDL0LUGg__'
							alt='img'
						/>
					</div>
				</div>
				<div className=''>
					<img
						className='w-[284px] h-[592px] object-cover'
						src='https://s3-alpha-sig.figma.com/img/7e21/f176/d70719a577d3f628b1ca3214ec4c2449?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYnEvOfVqmCNgBF8lH0SaMAZefKYzbus4ZnyDrIF7DXtkxtxUdgWy4R~M~6Uq~epLM3YVXpMAVnyo~ves9rNBdgJgT6F~LfTsX8L8K5QcGqQ9eZQr~IBZm5XegmGHauo5ou1ZPnuP979I7J1~F5s~E8TK1R6JipJGsYkvrR6CzvDA0kAX6IPW9noih98mG7L2mnyc7B7ro5IA2gb0DsSibZLVtOrVwQ3Q~waA89WuZHz2mmuEBpJaytgLbP5EXKZ0f4ODzx~yUJAurLtVKP3aYHAVFrPswP-MPYh77Z8KpExqXU1cNwXoL68BmS-miAGmHbuwWzsmjuzE4LJURRoMA__'
						alt=''
					/>
				</div>
			</div>
			<div
				data-aos='zoom-in-up'
				className='w-full h-[120px] bg-[#F85D5D] flex items-center justify-center my-16'
			>
				<div className='flex items-center justify-center gap-5'>
					<img
						className='w-[63px] h-[63px] rounded-full'
						src='https://s3-alpha-sig.figma.com/img/f9bb/7500/97188dbdc7e64ceda4382b11223424aa?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gwwJQEneh5lhQjaruL~~R0GDKX-I22EJopVCpW1~~SYUFwMJDv2suYdUnVmcCvv1IqZpQbNjLvYGtI6i5evlGv3C1nvx2DCQVr351rRqnauYWqQIsl7JDWoBih-QPkTe6EawYtZE8i7fZOnH00l8Nqx76pNnmo7q8R8wVYqQr6B2asKUv6EBTwhqpDBheVNDGBPSyWbdSmxGcaYT2N4UOXUQSIez7iwf1Z6pAPck1iAkl4MwKpz9osdAjn4M~noG5JUGO2qC0-S83f6TW2bQtgbMaLhd7jPeI3rZ0kTwGxjYcfZ~A3E7PFZf7GOjIzGejjfN7H9wlpNGPeVytmc9cw__'
						alt='img'
					/>
					<div className=''>
						<h1 className='text-3xl font-bold text-white'>
							Если у вас отсутствует зуб, каждый день костная ткань убывает
						</h1>
						<p className='text-white'>
							Скорее всего вам придётся делать операцию по наращиванию костной
							ткани
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Useful
