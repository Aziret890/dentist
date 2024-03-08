import { IoSearchOutline } from 'react-icons/io5'
import styles from '../page.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function InterviewsWithPatients() {
	return (
		<section id={'section2'}>
			<div className={`container ${styles.containers}`}>
				<h1>Интервью с пациентами</h1>
				<div className='flex items-center gap-8'>
					<div className={styles.search}>
						<div className={styles['input-box']}>
							<label htmlFor='search'>Врачи</label>
							<input
								type='text'
								name='search'
								placeholder='Все врачи'
								id='search'
							/>
						</div>
						<button>
							<IoSearchOutline />
						</button>
					</div>
					<div className={styles.search}>
						<div className={styles['input-box']}>
							<label htmlFor='search'>Услуга</label>
							<input
								type='text'
								name='search'
								placeholder='Все услуги'
								id='search'
							/>
						</div>
						<button>
							<IoSearchOutline />
						</button>
					</div>
				</div>
				<Swiper className={styles.swiper} spaceBetween={20} slidesPerView={4}>
					{images.map((item, idx) => (
						<SwiperSlide key={idx}>
							<img src={item} alt='' />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

const images = [
	'https://s3-alpha-sig.figma.com/img/1684/407c/24d89acc09d307c57e0308376077aa4f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxwsxCWHv2T0uam3ETa~n5hZS2wCWRVpTfEw0bOUkduc6ILuxMePi1GOT6V7RI6zaR8QcALBbYn0tAZvo63XTJjxRemQab6~VJH32xhWQmTrHeaAPlDuud4sUVo1YvxLSZkN-INII2L-8WzsM-n20EQ-d9g2XG5BOcIx6cxdvwoh7QPtDDMDYQce3ZTflFfUNsIHcoz5naa6JXSR4-l29NBELjSfsPDvKQbNV68HrRvDnpYvcy3qFMDFJcmErH5iyyDa~HiaL6pympc7fGBkRp7t2180RrCvJbqgVWSEglYPJsO4dRAAstAPL5H6zVnOEf5eef0Qi6Sn--XCUbMnkA__',
	'https://s3-alpha-sig.figma.com/img/1684/407c/24d89acc09d307c57e0308376077aa4f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxwsxCWHv2T0uam3ETa~n5hZS2wCWRVpTfEw0bOUkduc6ILuxMePi1GOT6V7RI6zaR8QcALBbYn0tAZvo63XTJjxRemQab6~VJH32xhWQmTrHeaAPlDuud4sUVo1YvxLSZkN-INII2L-8WzsM-n20EQ-d9g2XG5BOcIx6cxdvwoh7QPtDDMDYQce3ZTflFfUNsIHcoz5naa6JXSR4-l29NBELjSfsPDvKQbNV68HrRvDnpYvcy3qFMDFJcmErH5iyyDa~HiaL6pympc7fGBkRp7t2180RrCvJbqgVWSEglYPJsO4dRAAstAPL5H6zVnOEf5eef0Qi6Sn--XCUbMnkA__',
	'https://s3-alpha-sig.figma.com/img/1684/407c/24d89acc09d307c57e0308376077aa4f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxwsxCWHv2T0uam3ETa~n5hZS2wCWRVpTfEw0bOUkduc6ILuxMePi1GOT6V7RI6zaR8QcALBbYn0tAZvo63XTJjxRemQab6~VJH32xhWQmTrHeaAPlDuud4sUVo1YvxLSZkN-INII2L-8WzsM-n20EQ-d9g2XG5BOcIx6cxdvwoh7QPtDDMDYQce3ZTflFfUNsIHcoz5naa6JXSR4-l29NBELjSfsPDvKQbNV68HrRvDnpYvcy3qFMDFJcmErH5iyyDa~HiaL6pympc7fGBkRp7t2180RrCvJbqgVWSEglYPJsO4dRAAstAPL5H6zVnOEf5eef0Qi6Sn--XCUbMnkA__',
	'https://s3-alpha-sig.figma.com/img/1684/407c/24d89acc09d307c57e0308376077aa4f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxwsxCWHv2T0uam3ETa~n5hZS2wCWRVpTfEw0bOUkduc6ILuxMePi1GOT6V7RI6zaR8QcALBbYn0tAZvo63XTJjxRemQab6~VJH32xhWQmTrHeaAPlDuud4sUVo1YvxLSZkN-INII2L-8WzsM-n20EQ-d9g2XG5BOcIx6cxdvwoh7QPtDDMDYQce3ZTflFfUNsIHcoz5naa6JXSR4-l29NBELjSfsPDvKQbNV68HrRvDnpYvcy3qFMDFJcmErH5iyyDa~HiaL6pympc7fGBkRp7t2180RrCvJbqgVWSEglYPJsO4dRAAstAPL5H6zVnOEf5eef0Qi6Sn--XCUbMnkA__',
	'https://s3-alpha-sig.figma.com/img/1684/407c/24d89acc09d307c57e0308376077aa4f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxwsxCWHv2T0uam3ETa~n5hZS2wCWRVpTfEw0bOUkduc6ILuxMePi1GOT6V7RI6zaR8QcALBbYn0tAZvo63XTJjxRemQab6~VJH32xhWQmTrHeaAPlDuud4sUVo1YvxLSZkN-INII2L-8WzsM-n20EQ-d9g2XG5BOcIx6cxdvwoh7QPtDDMDYQce3ZTflFfUNsIHcoz5naa6JXSR4-l29NBELjSfsPDvKQbNV68HrRvDnpYvcy3qFMDFJcmErH5iyyDa~HiaL6pympc7fGBkRp7t2180RrCvJbqgVWSEglYPJsO4dRAAstAPL5H6zVnOEf5eef0Qi6Sn--XCUbMnkA__',
	'https://s3-alpha-sig.figma.com/img/1684/407c/24d89acc09d307c57e0308376077aa4f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxwsxCWHv2T0uam3ETa~n5hZS2wCWRVpTfEw0bOUkduc6ILuxMePi1GOT6V7RI6zaR8QcALBbYn0tAZvo63XTJjxRemQab6~VJH32xhWQmTrHeaAPlDuud4sUVo1YvxLSZkN-INII2L-8WzsM-n20EQ-d9g2XG5BOcIx6cxdvwoh7QPtDDMDYQce3ZTflFfUNsIHcoz5naa6JXSR4-l29NBELjSfsPDvKQbNV68HrRvDnpYvcy3qFMDFJcmErH5iyyDa~HiaL6pympc7fGBkRp7t2180RrCvJbqgVWSEglYPJsO4dRAAstAPL5H6zVnOEf5eef0Qi6Sn--XCUbMnkA__',
	'https://s3-alpha-sig.figma.com/img/1684/407c/24d89acc09d307c57e0308376077aa4f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxwsxCWHv2T0uam3ETa~n5hZS2wCWRVpTfEw0bOUkduc6ILuxMePi1GOT6V7RI6zaR8QcALBbYn0tAZvo63XTJjxRemQab6~VJH32xhWQmTrHeaAPlDuud4sUVo1YvxLSZkN-INII2L-8WzsM-n20EQ-d9g2XG5BOcIx6cxdvwoh7QPtDDMDYQce3ZTflFfUNsIHcoz5naa6JXSR4-l29NBELjSfsPDvKQbNV68HrRvDnpYvcy3qFMDFJcmErH5iyyDa~HiaL6pympc7fGBkRp7t2180RrCvJbqgVWSEglYPJsO4dRAAstAPL5H6zVnOEf5eef0Qi6Sn--XCUbMnkA__'
]
