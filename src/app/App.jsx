<<<<<<< HEAD
import { useLocation } from 'react-router-dom'
import Footer from '../widgets/common/FooterEnd/Footer'
import Footer2 from '../widgets/common/FooterEnd/Footer2'
import Footer3 from '../widgets/common/FooterEnd/Footer3'
import Footer4 from '../widgets/common/FooterEnd/Footer4'
import Header from '../widgets/common/Header'
import Form2Home from '../widgets/common/form2Home/Form2Home'
import './App.css'
import Routers from './routers'
import { useEffect } from 'react'
=======
import Footer from "../widgets/common/FooterEnd/Footer";
import Footer2 from "../widgets/common/FooterEnd/Footer2";
import Footer3 from "../widgets/common/FooterEnd/Footer3";
import Footer4 from "../widgets/common/FooterEnd/Footer4";
import Header from "../widgets/common/Header";
import Form2Home from "../widgets/common/form2Home/Form2Home";
import "./App.css";
import Routers from "./routers";
>>>>>>> d55e6aa7ca944e0e7bbd7acb4331104598504258
function App() {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<>
			<Header />
			<Routers />
			<Form2Home />
			<Footer />
			<Footer2 />
			<Footer3 />
			<Footer4 />
		</>
	)
}

export default App
