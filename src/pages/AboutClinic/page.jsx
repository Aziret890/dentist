import { useLocation } from 'react-router-dom'
import './page.scss'
import ButtonTabIndex from './components/ButtonTabIndex'
import TabContentResult from './components/TabContentResult'

function VacancyPage() {
	const location = useLocation().search
	const searchParams = new URLSearchParams(location)
	const tabId = +searchParams.get('tabId')

	return (
		<>
			<section className='vakancies'>
				<div className='container'>
					<div className='vakancies__content'>
						<h1>
							{!tabId
								? 'О клинике'
								: tabId === 2
								? 'Сертификаты'
								: tabId === 3
								? 'Правовая информация'
								: tabId === 4
								? 'Реквизиты'
								: tabId === 5
								? 'Вакансии'
								: ''}
						</h1>
						<div className='vakancies__btns mt-[54px]'>
							<ButtonTabIndex id={+tabId} />
						</div>
						<TabContentResult id={+tabId} />
					</div>
				</div>
			</section>
		</>
	)
}

export default VacancyPage
