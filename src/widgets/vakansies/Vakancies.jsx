import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Requits/Requits.scss";
import "./Vakancies.scss";
import VakanciesChil from "./VakanciesChil";
import Requits from "../Requits/Requits";
import Licenses from "../../pages/DetailDoctors/components/Licenses";
import { docArr } from "../../entity/const/doc.const";
import ClinicPage from "../../pages/ClinickPage/ClinicPage";

function Vakancies({ id }) {
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
          <h1>
            {!id
              ? "О клинике"
              : id === 2
              ? "Сертификаты"
              : id === 3
              ? "Реквизиты"
              : id === 4
              ? "Вакансии"
              : ""}
          </h1>
          <div className="vakancies__btns mt-[54px]">
            <div className="requits__block__btns flex justify-between">
              <button
                className={clsx("flex items-center justify-center gap-4", {
                  actives: !id || id === 1,
                })}
              >
                <Link to={"/vacancy"}>
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 22V18H15V22"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 6H8.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 6H16.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6H12.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 10H12.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14H12.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 10H16.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 14H16.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10H8.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14H8.01"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  О клинике
                </Link>
              </button>
              <button
                className={clsx("flex items-center justify-center gap-4", {
                  actives: id === 2,
                })}
              >
                <Link to={"/vacancy?tabId=2"}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.2718 10.445L18 2L14.2718 10.445ZM9.31612 10.6323L5 2L9.31612 10.6323ZM12.7615 10.0479L8.835 2L12.7615 10.0479ZM14.36 2L13.32 4.5L14.36 2ZM6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Сертификаты
                </Link>
              </button>
              <button
                className={clsx("flex items-center justify-center gap-4", {
                  actives: id === 3,
                })}
              >
                <Link to={"/vacancy?tabId=3"}>
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 18H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6H3.01"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12H3.01"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 18H3.01"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Реквизиты
                </Link>
              </button>
              <button
                className={clsx("flex items-center justify-center gap-4", {
                  active: id === 4,
                })}
              >
                <Link to={"/vacancy?tabId=4"}>
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                      stroke="#2CB2BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Вакансии
                </Link>
              </button>
            </div>
          </div>
          {!id || id === 1 ? (
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
                    Нажимая на кнопку вы подтверждаете, что прочитали и
                    соглашаетесь с политикой обработки перс. данных
                  </p>
                </div>
              </div>
            </div>
          ) : id === 2 ? (
            <div className="mt-10">
              <Licenses doc={docArr[0]} />
            </div>
          ) : id === 3 ? (
            // "Реквизиты"
            <Requits />
          ) : id == 4 ? (
            <ClinicPage />
          ) : null}
        </div>
      </div>
    </section>
  );
}
//aziret finish
export default Vakancies;
