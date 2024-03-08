import { useEffect, useState } from "react";
import "./Equiment.scss";
import axios from "axios";
function Equiment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://akmatovt.pythonanywhere.com/equipment/").then((res) =>
      setData(res.data)
    );
  }, []);
  console.log(data);
  return (
    <section className="equiment">
      <div className="container">
        <div className="equiment__title">
          <h1>Работаем на профессиональном оборудовании</h1>
        </div>
        <div className="equiment__info">
          <div className="equiment__info__img">
            <img
              src={
                "https://akmatovt.pythonanywhere.com/media/" + data[0]?.image
              }
              alt=""
            />
          </div>
          <div className="equiment__info__info">
            <div className="equiment__info__info-block">
              <h2>Стоматологическая установка Performer III</h2>
              <p>производитель США</p>
            </div>
            <div className="equiment__info__info-block">
              <h2>Очки-бинокуляры MediPlus</h2>
              <p>производитель Ю. Корея</p>
            </div>
          </div>
        </div>
        <div className="equiment__btn">
          <button>Подробнее</button>
        </div>
      </div>
    </section>
  );
}

export default Equiment;
