import React, { useEffect, useState } from "react";
import "./Partners.css";
import Partner1 from "./image 28.png";
import Partner2 from "./image 29.png";
import Partner3 from "./image 30.png";
import Partner4 from "./image 31.png";
import Partner5 from "./image 32.png";
import Partner6 from "./image 33.png";
import axios from "axios";

const Partners = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://akmatovt.pythonanywhere.com/partners/").then((res) =>
      setData(res.data)
    );
  }, []);
  return (
    <div id="partners">
      <div className="container">
        <div className="partners">
          <h1>Мы работаем по ДМС</h1>
          <p>С ведущими страховыми компаниями России</p>
          <div className="pic-partners">
            {data?.map((el) => (
              <img
                src={`https://akmatovt.pythonanywhere.com/media/${el.logo}`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
