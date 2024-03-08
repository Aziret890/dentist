import { SwiperSlide, Swiper } from 'swiper/react'
import { Keyboard, Pagination } from 'swiper/modules'
import clsx from 'clsx'
import './Certificate.scss'

export default function Certificate() {
	return (
		<div className='mt-10'>
			<section id='section3' className='mb-20'>
				<h1 className='mb-10' data-aos='fade-up'>
					Лицензии и сертификаты врача
				</h1>
				<Swiper
					modules={[Keyboard, Pagination]}
					spaceBetween={10}
					slidesPerView={4}
					keyboard
					pagination={{ clickable: true }}
					className={clsx(` licenses-content`)}
				>
					{licenses &&
						licenses.map((item, idx) => (
							<SwiperSlide key={idx}>
								<li data-aos='fade-up' data-aos-duration={idx * 500}>
									<div className={'licenses-image'}>
										<img src={item.photo} alt='' />
									</div>
									<h4>{item.text}</h4>
								</li>
							</SwiperSlide>
						))}
				</Swiper>
			</section>
		</div>
	)
}
const licenses = [
	{
		photo:
			'https://s3-alpha-sig.figma.com/img/c4bf/73f7/2e42d0a903b024ae98134ab3885004d4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klFRgVvJ9r-3OFf2ZA2HAZF~y7BPofOs2he3fNub1NoLtNVvvX6nSDHcZ4~HlEq9xVrVQRniDy4sQRq4z5drE8q1JBxrDycsZjRtOrOHJI-Sye8HKzW-kuPQ10eSWKNEnKF2r6wzcQOO80QuMhsrEZmiEIWGvwa9NYGJ9symRIg0HoGWlyXoQx9G-LAgN488XMzr93ZmG2Vy-fA9h7RdUhzxsq4ZW~m2-jzKZImZDMH-rtsf-uooqPdy-m3p9RnAK70VzK9R2zX2IiRNyyApNDRsAyoGvj-W1jUN6R4n09O3vRDaSDw64ug40AXsdtMb8nFidSKM6xM20vkG3RSGlQ__',
		text: 'Название сертификата в две строки максимум...'
	},
	{
		photo:
			'https://s3-alpha-sig.figma.com/img/2a77/491d/2f9559332af589d24c65ebb4cbe1adde?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TpbG~ql8JPK4Rjb8-4esYR2G~0iKFZhThTibnamrzZNsvY7ryr4q2FiJYZlIyn9fzZfxPQp2bjixB39doz7LytwK0gd5MA0Ht2SyQovOgpt8dfmuLLflzYfLXZDDPZxYOSrOHeq-ObgAuSz-PCaeNgosBAGlJ84xjRDoyWEgn5y4GQdjVKOyNVqhNJWxQwl6hrFfAjy-VC2MOrydA5uG5QE5Jd4PswdU0tjRtV--CfgxV4d~QmWV4EqnmUG5Q96WeHeHeMqYIh0XePtkOv99Th6ZOQ78iXMO1tiiQkQcsEZlKBMELDX1VN3WYQ4VYw95Fu0T3QwgM4dv44IUreunTQ__',
		text: 'Название в одну строку'
	},
	{
		photo:
			'https://s3-alpha-sig.figma.com/img/106f/4a10/0b13ba0e0b9cf9797e0d7a633b03821b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VA-UiShKF9rOFFmEg~Lx~K7hGJCTtqsoh0YYRzQn8qtDFYtgHH1ZQeL6yHc9L7~fSWCwVgBd2afuV5768pm1eN5fzaOZikqA~LaLN3L-GYj5W~430gBWxeK8smmC93-VjDFN5dRdua37aDuOiixhI8EiLcoHdRmTADCZfxKmFQNG0iKb-~9vObW3UDHfNvyGO1ggzQr4-LSPCzS92gVCzYY1NgHthTL5GlZMlECVOtO~C2gYUUOebQ6PQ6jyydHGh2r-3gZIH1-Th9bQvkJt4GzDZ80v6hnL-GgpRSHTj3a7vF9PIksC6bhijlKEwBlLebVyLqmEYse0w0TtXM1snQ__',
		text: 'Название сертификата в две строки максимум...'
	},
	{
		photo:
			'https://s3-alpha-sig.figma.com/img/2a77/491d/2f9559332af589d24c65ebb4cbe1adde?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TpbG~ql8JPK4Rjb8-4esYR2G~0iKFZhThTibnamrzZNsvY7ryr4q2FiJYZlIyn9fzZfxPQp2bjixB39doz7LytwK0gd5MA0Ht2SyQovOgpt8dfmuLLflzYfLXZDDPZxYOSrOHeq-ObgAuSz-PCaeNgosBAGlJ84xjRDoyWEgn5y4GQdjVKOyNVqhNJWxQwl6hrFfAjy-VC2MOrydA5uG5QE5Jd4PswdU0tjRtV--CfgxV4d~QmWV4EqnmUG5Q96WeHeHeMqYIh0XePtkOv99Th6ZOQ78iXMO1tiiQkQcsEZlKBMELDX1VN3WYQ4VYw95Fu0T3QwgM4dv44IUreunTQ__',
		text: 'Название в одну строку'
	},
	{
		photo:
			'https://s3-alpha-sig.figma.com/img/c4bf/73f7/2e42d0a903b024ae98134ab3885004d4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klFRgVvJ9r-3OFf2ZA2HAZF~y7BPofOs2he3fNub1NoLtNVvvX6nSDHcZ4~HlEq9xVrVQRniDy4sQRq4z5drE8q1JBxrDycsZjRtOrOHJI-Sye8HKzW-kuPQ10eSWKNEnKF2r6wzcQOO80QuMhsrEZmiEIWGvwa9NYGJ9symRIg0HoGWlyXoQx9G-LAgN488XMzr93ZmG2Vy-fA9h7RdUhzxsq4ZW~m2-jzKZImZDMH-rtsf-uooqPdy-m3p9RnAK70VzK9R2zX2IiRNyyApNDRsAyoGvj-W1jUN6R4n09O3vRDaSDw64ug40AXsdtMb8nFidSKM6xM20vkG3RSGlQ__',
		text: 'Название сертификата в две строки максимум...'
	},
	{
		photo:
			'https://s3-alpha-sig.figma.com/img/2a77/491d/2f9559332af589d24c65ebb4cbe1adde?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TpbG~ql8JPK4Rjb8-4esYR2G~0iKFZhThTibnamrzZNsvY7ryr4q2FiJYZlIyn9fzZfxPQp2bjixB39doz7LytwK0gd5MA0Ht2SyQovOgpt8dfmuLLflzYfLXZDDPZxYOSrOHeq-ObgAuSz-PCaeNgosBAGlJ84xjRDoyWEgn5y4GQdjVKOyNVqhNJWxQwl6hrFfAjy-VC2MOrydA5uG5QE5Jd4PswdU0tjRtV--CfgxV4d~QmWV4EqnmUG5Q96WeHeHeMqYIh0XePtkOv99Th6ZOQ78iXMO1tiiQkQcsEZlKBMELDX1VN3WYQ4VYw95Fu0T3QwgM4dv44IUreunTQ__',
		text: 'Название в одну строку'
	},
	{
		photo:
			'https://s3-alpha-sig.figma.com/img/106f/4a10/0b13ba0e0b9cf9797e0d7a633b03821b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VA-UiShKF9rOFFmEg~Lx~K7hGJCTtqsoh0YYRzQn8qtDFYtgHH1ZQeL6yHc9L7~fSWCwVgBd2afuV5768pm1eN5fzaOZikqA~LaLN3L-GYj5W~430gBWxeK8smmC93-VjDFN5dRdua37aDuOiixhI8EiLcoHdRmTADCZfxKmFQNG0iKb-~9vObW3UDHfNvyGO1ggzQr4-LSPCzS92gVCzYY1NgHthTL5GlZMlECVOtO~C2gYUUOebQ6PQ6jyydHGh2r-3gZIH1-Th9bQvkJt4GzDZ80v6hnL-GgpRSHTj3a7vF9PIksC6bhijlKEwBlLebVyLqmEYse0w0TtXM1snQ__',
		text: 'Название сертификата в две строки максимум...'
	},
	{
		photo:
			'https://s3-alpha-sig.figma.com/img/2a77/491d/2f9559332af589d24c65ebb4cbe1adde?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TpbG~ql8JPK4Rjb8-4esYR2G~0iKFZhThTibnamrzZNsvY7ryr4q2FiJYZlIyn9fzZfxPQp2bjixB39doz7LytwK0gd5MA0Ht2SyQovOgpt8dfmuLLflzYfLXZDDPZxYOSrOHeq-ObgAuSz-PCaeNgosBAGlJ84xjRDoyWEgn5y4GQdjVKOyNVqhNJWxQwl6hrFfAjy-VC2MOrydA5uG5QE5Jd4PswdU0tjRtV--CfgxV4d~QmWV4EqnmUG5Q96WeHeHeMqYIh0XePtkOv99Th6ZOQ78iXMO1tiiQkQcsEZlKBMELDX1VN3WYQ4VYw95Fu0T3QwgM4dv44IUreunTQ__',
		text: 'Название в одну строку'
	}
]
