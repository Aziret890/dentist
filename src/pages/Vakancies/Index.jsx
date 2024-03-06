import Vakancies from '../../widgets/vakansies/Vakancies'
import { useLocation } from 'react-router-dom'
function Index() {
	const location = useLocation().search
	const searchParams = new URLSearchParams(location)
	const tabId = searchParams.get('tabId')

	return (
		<>
			<Vakancies id={Number(tabId)} />
		</>
	)
}

export default Index
