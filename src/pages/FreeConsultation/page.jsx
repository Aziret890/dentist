import styles from './page.module.scss'
import clsx from 'clsx'
import FreeConsultationContent from './components/FreeConsultationContent'
import FreeConsultationEtape from './components/FreeConsultationEtape'

export default function FreeConsultation() {
	return (
		<main>
			<div
				className={clsx(
					`${styles['start']} w-full h-[52px] opacity-60 pt-3 text-white bg-[#2CB2BB]`
				)}
			>
			
				<div className='container'>Дистанционная консультация</div>
			</div>
			<FreeConsultationContent />
			<FreeConsultationEtape />
		</main>
	)
}
