import React, { useEffect } from "react";
import "./Requits.scss";
import medal from "../../images/medal.svg";
import RequtsDetals from "./RequtsDetals";
function Requits() {
  const dataCopyInfo = [
    {
      name: "Наименование организации",
      info: "Общество с ограниченной ответственностью Название",
    },
    {
      name: "Юридический адрес",
      info: "123456, г. Москва, ул. Подвойского, д. 14, стр. 7",
    },
    {
      name: "Почтовый адрес",
      info: "123456, г. Москва, ул. Подвойского, д. 14, стр. 7",
    },
    {
      name: "ИНН",
      info: "7712345678",
    },
    {
      name: "КПП",
      info: "779101001",
    },
    {
      name: "БИК",
      info: "044521234",
    },
    {
      name: "Р/С",
      info: "40702810123450101230 в Московский банк ПАО Сбербанк г. Москва",
    },
    {
      name: "К/С",
      info: "30101234500000000225",
    },
    {
      name: "ОКПО",
      info: "12345678",
    },
    {
      name: "ОКВЭД (основной)",
      info: "18.15",
    },
    {
      name: "Генеральный директор",
      info: "Петров Сергей Петрович",
    },
    {
      name: "Электронная почта",
      info: "info@name.ru",
    },
    {
      name: "Электронная почта",
      info: "info@name.ru",
    },
    {
      name: "Электронная почта",
      info: "info@name.ru",
    },
  ];
  return (
    <section className="requits">
      <div className="container">
        <div className="requits__content">
          <div className="requits__title">
            <h1>Реквизиты</h1>
          </div>
          {/* <div className="requits__block__btns flex justify-between">
            <button className="flex items-center justify-center gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 22V18H15V22"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 6H8.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 6H16.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 6H12.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 10H12.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14H12.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 10H16.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 14H16.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 10H8.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 14H8.01"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              О клинике
            </button>
            <button className="flex items-center justify-center gap-4">
              <img src={medal} alt="" />
              Сертификаты
            </button>
            <button className="flex items-center justify-center gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 16L19 8L22.001 16C21.1353 16.649 20.0825 16.9999 19.0005 16.9999C17.9185 16.9999 16.8657 16.649 16 16Z"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 16L5 8L8.001 16C7.1353 16.649 6.08248 16.9999 5.0005 16.9999C3.91852 16.9999 2.8657 16.649 2 16Z"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 21H17"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 3V21"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 7H5C7 7 10 6 12 5C14 6 17 7 19 7H21"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Сертификаты
            </button>
            <button className="flex items-center justify-center gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                  stroke="#2CB2BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Вакансии
            </button>
            <button className="flex items-center justify-center gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 6H21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12H21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 18H21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 6H3.01"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 12H3.01"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 18H3.01"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Вакансии
            </button>
          </div> */}
          <div className="requits__copy">
            {dataCopyInfo.map((el, inx) => (
              <RequtsDetals el={el} key={inx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Requits;
