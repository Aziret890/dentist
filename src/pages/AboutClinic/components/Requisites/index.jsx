import "./index.scss";
import RequisitesDetail from "./index.detail";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../../shared/ui/Loader";
function Requisites() {
  const [dataCopyInfo, setData] = useState([]);
  useEffect(() => {
    axios("https://akmatovt.pythonanywhere.com/requisites/").then((res) =>
      setData(res.data)
    );
  }, []);
  // const dataCopyInfo = [
  // 	{
  // 		name: 'Наименование организации',
  // 		info: 'Общество с ограниченной ответственностью Название'
  // 	},
  // 	{
  // 		name: 'Юридический адрес',
  // 		info: '123456, г. Москва, ул. Подвойского, д. 14, стр. 7'
  // 	},
  // 	{
  // 		name: 'Почтовый адрес',
  // 		info: '123456, г. Москва, ул. Подвойского, д. 14, стр. 7'
  // 	},
  // 	{
  // 		name: 'ИНН',
  // 		info: '7712345678'
  // 	},
  // 	{
  // 		name: 'КПП',
  // 		info: '779101001'
  // 	},
  // 	{
  // 		name: 'БИК',
  // 		info: '044521234'
  // 	},
  // 	{
  // 		name: 'Р/С',
  // 		info: '40702810123450101230 в Московский банк ПАО Сбербанк г. Москва'
  // 	},
  // 	{
  // 		name: 'К/С',
  // 		info: '30101234500000000225'
  // 	},
  // 	{
  // 		name: 'ОКПО',
  // 		info: '12345678'
  // 	},
  // 	{
  // 		name: 'ОКВЭД (основной)',
  // 		info: '18.15'
  // 	},
  // 	{
  // 		name: 'Генеральный директор',
  // 		info: 'Петров Сергей Петрович'
  // 	},
  // 	{
  // 		name: 'Электронная почта',
  // 		info: 'info@name.ru'
  // 	},
  // 	{
  // 		name: 'Электронная почта',
  // 		info: 'info@name.ru'
  // 	},
  // 	{
  // 		name: 'Электронная почта',
  // 		info: 'info@name.ru'
  // 	}
  // ]
  return (
    <section className="requits">
      <div className="container">
        <div className="requits__content">
          <div className="requits__title">
            <h1>Реквизиты</h1>
          </div>
          <div className="requits__copy">
            {dataCopyInfo.length == 0 ? (
              <center className="mt-[20%]">
                <Loader />
              </center>
            ) : (
              dataCopyInfo.map((el, inx) => (
                <RequisitesDetail el={el} key={inx} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Requisites;
