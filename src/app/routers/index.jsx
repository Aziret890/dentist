import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/page";
import AboutClinic from "../../pages/AboutClinic/page";
import Doctors from "../../pages/Doctors/page";
import VakanciesPage from "../../pages/Vakancies/Index";
import DetailDoctors from "../../pages/DetailDoctors/page";
import ServicesPage from "../../pages/Services/Page";
import Sale from "../../pages/Sale";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/clinic" element={<AboutClinic />} />
        <Route path="/about/vakancies" element={<VakanciesPage />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:docId" element={<DetailDoctors />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/action" element={<Sale />} />
      </Routes>
    </>
  );
}
