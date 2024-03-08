import { useEffect, useState } from "react";
import "./weUse.scss";
import axios from "axios";
// import images1 from '../../src/images/pages2-slidger.png'
// import images2 from '../../src/images/pages2-slider1.png'

function WeUse() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://akmatovt.pythonanywhere.com/equipment/").then((res) =>
      setData(res.data)
    );
  }, []);
  console.log(data);
  return (
    <section className="weUse">
      <div className="container">
        <div className="weUse__content">
          <div className="weUse__content__title">
            <p>
              ш <span>Корпорация Kerr</span>, подразделение Sybron Dental
              Speciality, является одним из ведущих в мире производителей
              высококачественных расходных материалов для стоматологии. Компания
              была создана в США в 1891 году.
            </p>
          </div>
          <div style={{ maxWidth: "300px" }} className="weUse__content__slider">
            {data.map((el) => (
              <>
                <img
                  className="w-[100%]"
                  src={"https://akmatovt.pythonanywhere.com/media/" + el.image}
                  alt=""
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeUse;
