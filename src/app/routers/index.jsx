<<<<<<< HEAD:src/app/routers/index.jsx
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/page'
import AboutClinic from '../../pages/AboutClinic/page'
import Doctors from '../../pages/Doctors/page'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about/clinic' element={<AboutClinic />} />
				<Route path='/doctors' element={<Doctors />} />
			</Routes>
		</>
	)
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/page";
import AboutClinic from "../../pages/AboutClinic/page";
import Index from "../../pages/Vakancies/Index";

export default function Routers() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/clinic" element={<AboutClinic />} />
        <Route path="/about/vakancies" element={<Index />} />
      </Routes>
    </main>
  );
>>>>>>> fbd6db128cdb2a1234cd153e6c1dbe1c8697fcbf:src/app/routers/index.tsx
}
