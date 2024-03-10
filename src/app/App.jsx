import Footer from "../widgets/common/FooterEnd/Footer";
import Footer2 from "../widgets/common/FooterEnd/Footer2";
import Footer3 from "../widgets/common/FooterEnd/Footer3";
import Footer4 from "../widgets/common/FooterEnd/Footer4";
import Header from "../widgets/common/Header";
import Form2Home from "../widgets/common/form2Home";
import Routers from "./routers";
import "./App.css";
import AuthModal from "../widgets/AuthModal";
import MoreDetail from "../widgets/MoreDetail";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Header />
      <Routers />
      <Form2Home />
      <Footer />
      <Footer2 />
      <Footer3 />
      <Footer4 />

      {/* AUTH */}
      <AuthModal />
      {/* AUTH */}
      <ToastContainer />

      <MoreDetail />
    </>
  );
}

export default App;
