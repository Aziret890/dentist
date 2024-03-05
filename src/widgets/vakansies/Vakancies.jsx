import React, { useState } from "react";
import "./Vakancies.scss";
import medal from "../../shared/assets/images/medal.svg";
import "../requits/Requits.scss";
import VakanciesChil from "./VakanciesChil";
import axios from "axios";

function Vakancies() {
  const [dataVakanciesOne, setVakanciesOne] = useState("");
  const [objDataNum, setObjDataNum] = useState("");
  const [objDataName, setObjDataName] = useState("");
  const [objDataJobData, setObjDataJobData] = useState("");

  const [time, setTime] = useState(15);
  const TELEGRAM_CHAT_ID = "@messageAziret";
  const TELEGRAM_BOT_TOKEN = "7078287615:AAFDWtz-p3HpL28ItVtLyo-1_2l2MAQQPf8";
  const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const dataVakancies = [
    { title: "Начинающий стоматолог-терапевт", price: "от 40 000 рублей" },
    { title: "Опытный стоматолог-терапевт", price: "от 80 000 рублей" },
    { title: "Начинающий стоматолог-ортопед", price: "от 60 000 рублей" },
    { title: "Опытный стоматолог-ортопед", price: "от 150 000 рублей" },
  ];
  async function sendMessageBot() {
    let res = {
      name: objDataName,
      number: objDataNum,
    };
    let resMessage = `привет мененджер заявка на вакансию \n  имя : '${res.name}' \n нрмер: "${res.number}" \n должность выбор : '${objDataJobData}' \n должность: ${dataVakanciesOne} \n напиши ему 🤗🤗🤗`;
    axios.post(API, {
      chat_id: TELEGRAM_CHAT_ID,
      parse_mode: "html",
      text: resMessage,
    });
    var secs = 10;
    var timer = setInterval(tick, 1000);
    function tick() {
      if (secs > 0) {
        setTime(--secs);
      }
    }
    setObjDataName("");
    setObjDataNum("");
  }
  return (
    <section className="vakancies">
      <div className="container">
        <div className="vakancies__content">
          <h1>Вакансии</h1>
          <div className="vakancies__btns mt-[54px]">
            <div className="requits__block__btns flex justify-between">
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
            </div>
          </div>
          <div className="vakancies__block__wrapper mt-[48px]">
            <div className="block__wrapper__categories">
              {dataVakancies.map((el, inx) => (
                <VakanciesChil
                  el={el}
                  key={inx}
                  setVakanciesOne={setVakanciesOne}
                />
              ))}
            </div>
            <div className="block__wrapper__inputs">
              <h2>Заявка на вакансию</h2>
              <div className=" flex flex-col gap-[16px] mt-[30px]">
                <input
                  onChange={(e) => setObjDataName(e.target.value)}
                  placeholder="Имя"
                  type="text"
                  name="text"
                  class="input"
                />
                <input
                  onChange={(e) => setObjDataNum(e.target.value)}
                  placeholder="Мобильный телефон"
                  type="text"
                  name="text"
                  class="input"
                />

                <input
                  onChange={(e) => setObjDataJobData(e.target.value)}
                  placeholder="Желаемая должность"
                  type="text"
                  name="text"
                  class="input"
                />
                <div className=" flex justify-center mt-[45px]">
                  <button onClick={() => sendMessageBot()}>
                    <div>
                      <span>
                        <p>Отправить</p>
                        <p>:)</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>спасибо</p>
                        <p>:D</p>
                      </span>
                    </div>
                  </button>
                </div>
                <p className="text-center mt-[15px]">
                  Нажимая на кнопку вы подтверждаете, что прочитали и
                  соглашаетесь с политикой обработки перс. данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vakancies;
