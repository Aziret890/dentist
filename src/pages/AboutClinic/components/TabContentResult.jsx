/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import Certificate from "./Certificate";
import Requisites from "./Requisites";
import VaсanciesChil from "./VaсanciesChil";
import NoResultFound from "../../NoResultFound/page";
import ClinicHomo from "./ClinicHome";
export default function TabContentResult({ id }) {
  const [dataVacanciesOne, setVacanciesOne] = useState("");
  const [objDataNum, setObjDataNum] = useState("");
  const [objDataName, setObjDataName] = useState("");
  const [objDataJobData, setObjDataJobData] = useState("");

  const [time, setTime] = useState(15);
  const dataVacancies = [
    { title: "Начинающий стоматолог-терапевт", price: "от 40 000 рублей" },
    { title: "Опытный стоматолог-терапевт", price: "от 80 000 рублей" },
    { title: "Начинающий стоматолог-ортопед", price: "от 60 000 рублей" },
    { title: "Опытный стоматолог-ортопед", price: "от 150 000 рублей" },
  ];

  const TELEGRAM_CHAT_ID = "@messageAziret";
  const TELEGRAM_BOT_TOKEN = "7078287615:AAFDWtz-p3HpL28ItVtLyo-1_2l2MAQQPf8";
  const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  async function sendMessageBot() {
    let res = {
      name: objDataName,
      number: objDataNum,
    };
    let resMessage = `привет мененджер заявка на вакансию \n  имя : '${res.name}' \n нрмер: "${res.number}" \n должность выбор : '${objDataJobData}' \n должность: ${dataVacanciesOne} \n напиши ему 🤗🤗🤗`;
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
    <div className="container">
      {!id || id === 1 ? (
        <ClinicHomo />
      ) : id === 2 ? (
        <Certificate />
      ) : id === 3 ? (
        <NoResultFound />
      ) : id === 4 ? (
        <Requisites />
      ) : id == 5 ? (
        <div className="vakancies__block__wrapper mt-[48px]">
          <div
            data-aos="zoom-in"
            data-aos-duration="900"
            className="block__wrapper__categories"
          >
            {dataVacancies.map((el, inx) => (
              <VaсanciesChil
                el={el}
                key={inx}
                setVacanciesOne={setVacanciesOne}
              />
            ))}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="block__wrapper__inputs"
          >
            <h2>Заявка на вакансию</h2>
            <div className=" flex flex-col gap-[16px] mt-[30px]">
              <input
                onChange={(e) => setObjDataName(e.target.value)}
                placeholder="Имя"
                type="text"
                name="text"
                className="input"
              />
              <input
                onChange={(e) => setObjDataNum(e.target.value)}
                placeholder="Мобильный телефон"
                type="text"
                name="text"
                className="input"
              />

              <input
                onChange={(e) => setObjDataJobData(e.target.value)}
                placeholder="Желаемая должность"
                type="text"
                name="text"
                className="input"
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
                Нажимая на кнопку вы подтверждаете, что прочитали и соглашаетесь
                с политикой обработки перс. данных
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
