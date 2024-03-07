import React from 'react'
import { LuDot } from 'react-icons/lu'
import Year from './components/Year'
import Our from '../../widgets/common/Our/Our'
import Description from './components/Description'
import Implants from './components/Implants'
import Stage from './components/Stage'
import Card from './components/Card'
import Useful from './components/Useful'
import Form from './components/Form'
import Blocks from './components/Blocks'
import Workexamples from './components/Workexamples'

const doc = {
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
				<Workexamples doc={doc}/>
			</div>
		</div>
	)
}

export default ServicesPage;
