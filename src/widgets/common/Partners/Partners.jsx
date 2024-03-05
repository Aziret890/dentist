import "./Partners.css";
import Partner1 from "./image 28.png";
import Partner2 from "./image 29.png";
import Partner3 from "./image 30.png";
import Partner4 from "./image 31.png";
import Partner5 from "./image 32.png";
import Partner6 from "./image 33.png";

const Partners = () => {
  return (
    <div id="partners">
      <div className="container">
        <div className="partners">
          <h1>Мы работаем по ДМС</h1>
          <p>С ведущими страховыми компаниями России</p>
          <div className="pic-partners">
            <img src={Partner1} alt="image :/" />
            <img src={Partner2} alt="image :/" />
            <img src={Partner3} alt="image :/" />
            <img src={Partner4} alt="image :/" />
            <img src={Partner5} alt="image :/" />
            <img src={Partner6} alt="image :/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
