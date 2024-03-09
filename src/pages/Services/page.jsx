import React from 'react'
import { LuDot } from 'react-icons/lu'

import Our from '../../widgets/common/Our'
import Reviews from '../../widgets/common/Reviews'
import Additional from './components/Additional'
import Blocks from './components/Blocks'
import Card from './components/Card'
import Care from './components/Care'
import Description from './components/Description'
import Form from './components/Form'
import Implants from './components/Implants'
import Often from './components/Often'
import OurDoctors from './components/OurDoctors'
import Signup from './components/Signup'
import Stage from './components/Stage'
import Toothbrush from './components/Toothbrush'
import Useful from './components/Useful'
import Workexamples from './components/Workexamples'
import Year from './components/Year'
import Photos from './components/Photos'
// import Exsemples from './components/Exsemples'

const docs = {
	examples_work: [
		{
			technology: 'Протезы и импланты',
			doctor: 'Смирнова Анна',
			treatment_period: '10 дней',
			image:
				'https://s3-alpha-sig.figma.com/img/601e/06fc/db56f0a13908b7a62c71587f79852257?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVWbeAVGD1EL-IFmllagenPBpcaeE7eSi9i0fZ1MlELNtsjS5CeT-kzX69ZJsHwC3XzVPLC8q5PvQholeIi2LJbzH7Ojz9v78KrxqVWQQXPc2HQeAA9d2M1eQOaT4ZOEkbQ1GaN4t9dDz1t7BFVgbdksqDA4bm4cWVo5Bi4xIV99gw7Bc6EibQ0UHHEcxJRcl8NhvsIyHgT6bt0JPTPxcxCWRSzNafVMnQfzKZ9~KyCChBibDlLc3KNa6Rj6S4N7KlFRcLn5nw2~aUYAKtlVbJPkivX~1nH9R4lFbJ4RGcHhfVBmTGfisp58NFhd3OXXIIdYKZuGl8WXCQ~jj6DLdg__'
		},
		{
			technology: 'Протезы и импланты',
			doctor: 'Смирнова Анна',
			treatment_period: '10 дней',
			image:
				'https://s3-alpha-sig.figma.com/img/601e/06fc/db56f0a13908b7a62c71587f79852257?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVWbeAVGD1EL-IFmllagenPBpcaeE7eSi9i0fZ1MlELNtsjS5CeT-kzX69ZJsHwC3XzVPLC8q5PvQholeIi2LJbzH7Ojz9v78KrxqVWQQXPc2HQeAA9d2M1eQOaT4ZOEkbQ1GaN4t9dDz1t7BFVgbdksqDA4bm4cWVo5Bi4xIV99gw7Bc6EibQ0UHHEcxJRcl8NhvsIyHgT6bt0JPTPxcxCWRSzNafVMnQfzKZ9~KyCChBibDlLc3KNa6Rj6S4N7KlFRcLn5nw2~aUYAKtlVbJPkivX~1nH9R4lFbJ4RGcHhfVBmTGfisp58NFhd3OXXIIdYKZuGl8WXCQ~jj6DLdg__'
		},
		{
			technology: 'Протезы и импланты',
			doctor: 'Смирнова Анна',
			treatment_period: '10 дней',
			image:
				'https://s3-alpha-sig.figma.com/img/601e/06fc/db56f0a13908b7a62c71587f79852257?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVWbeAVGD1EL-IFmllagenPBpcaeE7eSi9i0fZ1MlELNtsjS5CeT-kzX69ZJsHwC3XzVPLC8q5PvQholeIi2LJbzH7Ojz9v78KrxqVWQQXPc2HQeAA9d2M1eQOaT4ZOEkbQ1GaN4t9dDz1t7BFVgbdksqDA4bm4cWVo5Bi4xIV99gw7Bc6EibQ0UHHEcxJRcl8NhvsIyHgT6bt0JPTPxcxCWRSzNafVMnQfzKZ9~KyCChBibDlLc3KNa6Rj6S4N7KlFRcLn5nw2~aUYAKtlVbJPkivX~1nH9R4lFbJ4RGcHhfVBmTGfisp58NFhd3OXXIIdYKZuGl8WXCQ~jj6DLdg__'
		},
		{
			technology: 'Протезы и импланты',
			doctor: 'Смирнова Анна',
			treatment_period: '10 дней',
			image:
				'https://s3-alpha-sig.figma.com/img/601e/06fc/db56f0a13908b7a62c71587f79852257?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVWbeAVGD1EL-IFmllagenPBpcaeE7eSi9i0fZ1MlELNtsjS5CeT-kzX69ZJsHwC3XzVPLC8q5PvQholeIi2LJbzH7Ojz9v78KrxqVWQQXPc2HQeAA9d2M1eQOaT4ZOEkbQ1GaN4t9dDz1t7BFVgbdksqDA4bm4cWVo5Bi4xIV99gw7Bc6EibQ0UHHEcxJRcl8NhvsIyHgT6bt0JPTPxcxCWRSzNafVMnQfzKZ9~KyCChBibDlLc3KNa6Rj6S4N7KlFRcLn5nw2~aUYAKtlVbJPkivX~1nH9R4lFbJ4RGcHhfVBmTGfisp58NFhd3OXXIIdYKZuGl8WXCQ~jj6DLdg__'
		}
	]
}

const photos = [
	'https://s3-alpha-sig.figma.com/img/ff95/aa40/39487e91d12dd9260410c988b9848a55?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hi6a1GZJsiN9rm96wAKD3RJieZV-7o5-DZ5GnbdTc-eOvcBGrDfs-Uu1olcDRtGj~UA120BmLprpPwYnNPG9MTZRD0Dqk6dME2yuUVZHsGSud39DuwJOZ-59057h8nQlkb-Di2kb6Hmvu7kPfZY5A8qBWAUF7gA6EyuZl8f7c96aunbJqxBG2fueJx7mcEMoPsJlAHEdgsHPkoYDWdFCGil5BWMNTV12zTEKQgZ5oPGBF0vTLmf1xqFgzsKXmrLtcYnnnb4sdNpBuNcGoRLZlvd4jA1EX0wer-rmcav0ndnL~VlNr9SGFsRHm6SjtBdpTGyoWbEdNDCWxcKO~vYFgg__',
	'https://s3-alpha-sig.figma.com/img/83a6/bf79/9b86b6f2d0648120e18bbe3e80b25f1b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZlRnSSxaLcqn02T4b0cCnpvzvrvCYkaLXJNKW3Mch3-X05V8Mt1x1gicHgApA6kUg023Khadj5eXe0bZw-xLdpkUuuccFOYAQ--6658lrf34fymKOXssUkL-uHrZjlYU~xyAm2O1yX8zhWRNHTpMOZhuKUOswL4bRPXvTq0TIo0nv3YSuBbwZBvECTnHBV6nLk5dObhABOJWZ25PKrCAoICfcRwZIwVy7~5sJheDcHHiBj2TH7Prj18O9ged3lZjQ9aECbzp8o4Iqg7f6vCqrlOZKHq0mlThkGrqaD5Vg0i8hpV8gembtcT0QMy0RIobCjMKm3jdALF2uZaHNcg9g__',
	'https://s3-alpha-sig.figma.com/img/7208/d8a6/c2ad5c9832612d7a17e6b5d3c449a6c5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=blUzqCGVPn7o3Vjbp9bXhCcFBfhT812vKAIevAlAbnBhqS3zT6lpn0sYKcylKtptbV2zTZRvMw-EYiFWtZ1npe~RJJmOoseDYMOYIDStzrmiU9ZLTKIEpVlswnKD46XNEYAC1YWbJGbc-dBs~30H6WfcT5hJ8NcR0rdKswRHlawHjNqDDmZdkl2TMnRwccR54YE~qBbYXdi60hEgqjxtAZgQIAtSH1hK9gx2rWfl2aaAxgfbHmvRFNJzw6ch5N9DliCMCVwpteheKisKKoyu1lq19giuCRgko1yR8efy6dkRA4fhO4nXbf738YgAnki8kKU5Hhs2L83s6e~Khb-xXQ__',
	'https://s3-alpha-sig.figma.com/img/ec1e/51d9/12287eeedcb8f02da7093010739b3715?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4Q1yxvsPHE0LN42hYuRY9ke8BD64X5Ldq0SYC4ABVVlIbcIacqKpgFnXBKts0S5Ghl0bXJpXPnI5MzYSD~oPwiPevzpO6MbfmwoYrFqasiygqX3ZQ~Zm00f6FKysvialWMfNSkoCsBAe1TQsu9-y6nuII6ezc6Su~8qza0C3U6e0W7UxdUT2S0zvWnDT1sBNwIaO2Ck~e07AI3N4QbHXnMZr67HIOlYmUmyTv3xtFs06OqKnWmUWBC0ZT9YemOyrrAAnpGLWHzusxPf2Fsdjv-mD21g7BMm2VMz9efTWS2P4uTqHBe3xivC6SRWzF1W3q19~Z-X222Xnr9hVD7uDQ__',
	'https://s3-alpha-sig.figma.com/img/ff95/aa40/39487e91d12dd9260410c988b9848a55?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hi6a1GZJsiN9rm96wAKD3RJieZV-7o5-DZ5GnbdTc-eOvcBGrDfs-Uu1olcDRtGj~UA120BmLprpPwYnNPG9MTZRD0Dqk6dME2yuUVZHsGSud39DuwJOZ-59057h8nQlkb-Di2kb6Hmvu7kPfZY5A8qBWAUF7gA6EyuZl8f7c96aunbJqxBG2fueJx7mcEMoPsJlAHEdgsHPkoYDWdFCGil5BWMNTV12zTEKQgZ5oPGBF0vTLmf1xqFgzsKXmrLtcYnnnb4sdNpBuNcGoRLZlvd4jA1EX0wer-rmcav0ndnL~VlNr9SGFsRHm6SjtBdpTGyoWbEdNDCWxcKO~vYFgg__',
	'https://s3-alpha-sig.figma.com/img/83a6/bf79/9b86b6f2d0648120e18bbe3e80b25f1b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZlRnSSxaLcqn02T4b0cCnpvzvrvCYkaLXJNKW3Mch3-X05V8Mt1x1gicHgApA6kUg023Khadj5eXe0bZw-xLdpkUuuccFOYAQ--6658lrf34fymKOXssUkL-uHrZjlYU~xyAm2O1yX8zhWRNHTpMOZhuKUOswL4bRPXvTq0TIo0nv3YSuBbwZBvECTnHBV6nLk5dObhABOJWZ25PKrCAoICfcRwZIwVy7~5sJheDcHHiBj2TH7Prj18O9ged3lZjQ9aECbzp8o4Iqg7f6vCqrlOZKHq0mlThkGrqaD5Vg0i8hpV8gembtcT0QMy0RIobCjMKm3jdALF2uZaHNcg9g__',
	'https://s3-alpha-sig.figma.com/img/7208/d8a6/c2ad5c9832612d7a17e6b5d3c449a6c5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=blUzqCGVPn7o3Vjbp9bXhCcFBfhT812vKAIevAlAbnBhqS3zT6lpn0sYKcylKtptbV2zTZRvMw-EYiFWtZ1npe~RJJmOoseDYMOYIDStzrmiU9ZLTKIEpVlswnKD46XNEYAC1YWbJGbc-dBs~30H6WfcT5hJ8NcR0rdKswRHlawHjNqDDmZdkl2TMnRwccR54YE~qBbYXdi60hEgqjxtAZgQIAtSH1hK9gx2rWfl2aaAxgfbHmvRFNJzw6ch5N9DliCMCVwpteheKisKKoyu1lq19giuCRgko1yR8efy6dkRA4fhO4nXbf738YgAnki8kKU5Hhs2L83s6e~Khb-xXQ__',
	'https://s3-alpha-sig.figma.com/img/ec1e/51d9/12287eeedcb8f02da7093010739b3715?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4Q1yxvsPHE0LN42hYuRY9ke8BD64X5Ldq0SYC4ABVVlIbcIacqKpgFnXBKts0S5Ghl0bXJpXPnI5MzYSD~oPwiPevzpO6MbfmwoYrFqasiygqX3ZQ~Zm00f6FKysvialWMfNSkoCsBAe1TQsu9-y6nuII6ezc6Su~8qza0C3U6e0W7UxdUT2S0zvWnDT1sBNwIaO2Ck~e07AI3N4QbHXnMZr67HIOlYmUmyTv3xtFs06OqKnWmUWBC0ZT9YemOyrrAAnpGLWHzusxPf2Fsdjv-mD21g7BMm2VMz9efTWS2P4uTqHBe3xivC6SRWzF1W3q19~Z-X222Xnr9hVD7uDQ__'
]

const ServicesPage = () => {
	return (
		<div className=''>
			<div className='bg-[#F2FAFB] py-3'>
				<div className='container'>
					<h1 className='flex items-center gap-2 text-[#2CB2BB]'>
						Услуги <LuDot />
						Имплантация зубов с тройной гарантией
					</h1>
				</div>
			</div>
			<div className='my-16'>
				<Year />
				<Our />
				<Description />
				<Implants />
				<Stage />
				<Card />
				<Useful />
				<Form />
				<Blocks />
				<Workexamples doc={docs} />
				<Reviews />
				<OurDoctors />
				<Often />
				<Care />
				<Toothbrush />
				<Additional />
				<Signup />
				{/* <Exsemples /> */}
				<Photos photos={photos} />
			</div>
		</div>
	)
}

export default ServicesPage
