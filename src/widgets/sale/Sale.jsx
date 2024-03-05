import React from "react";
import medal from "../../shared/assets/images/medal.svg";
import pngAziret from "../../shared/assets/images/png-aziret.png";
import "./Sale.scss";
function Sale() {
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__content">
          <div className="sale__content__btns">
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
          <div className="sale__content__block flex justify-between">
            <div className="sale__content__block-info">
              <h2>Лечите зубы сейчас, оплачивайте потом</h2>
              <p>
                Объёмное стоматологическое лечение — серьёзная статья расходов,
                на которую не всегда есть возможность выделить всю сумму сразу.
                Отсутствие необходимых средств — не повод запускать здоровье. В
                «Нашей клинике» вы можете вылечить зубы в рассрочку без
                процентов. Стоматологические услуги стали ещё доступнее!
              </p>
              <h2>Лечение зубов в рассрочку</h2>
              <p>
                Стоимость зависит от диагноза, сложности случая и персональных
                особенностей. Изучите цены сейчас и запишитесь на индивидуальную
                консультацию, чтобы получить рекомендации врача и расчёт
                стоимости. Узнайте свою стоимость и получите скидку!
              </p>
              <h2>Рассрочка или кредит</h2>
              <p>
                Это отличная возможность заняться здоровьем полости рта даже  в
                случае, когда нет полной суммы на стоматологические услуги.
                Процесс состоит из нескольких этапов:
              </p>
              <h3>КОНСУЛЬТАЦИЯ И ДИАГНОСТИКА </h3>
              <p>
                Врач-стоматолог проводит осмотр, выслушивает ваши пожелания  и
                подбирает оптимальный вариант.
              </p>
              <h3>ЗАКЛЮЧЕНИЕ ДОГОВОРА </h3>
              <p>
                Заключается договор на необходимые процедуры, в котором подробно
                расписывается стоимость, количество платежей и их сумма.
              </p>
              <h3>ЛЕЧЕНИЕ ЗУБОВ </h3>
              <p>
                Назначается один или несколько приёмов в зависимости от
                сложности случая, затем доктор приступает к работе над зубами.
              </p>
              <h3>РЕКОМЕНДАЦИИ ПО УХОДУ </h3>
              <p>
                После окончания процедур врач даёт рекомендации по уходу за
                зубами в домашних условиях.
              </p>
            </div>
            <div className="flex flex-col items-center relative">
              <div className="sale__content__block-img ">
                <img className="sale__content-block" src={pngAziret} alt="" />
                <img className="sale__content-none" src={pngAziret} alt="" />
              </div>
              <div className="sale__content__block-img2 absolute top-[175px]">
                <h2>Запись на консультацию</h2>
                <p>
                  Не откладывайте, запишитесь на консультацию прямо сейчас,
                  перезвоним через 15 минут
                </p>
                <div className="flex justify-center mt-5">
                  <button>
                    <div>
                      <span>
                        <p>Бесплатная</p>
                        <p>:)</p>
                      </span>
                    </div>
                    <div>
                      <span>
                        <p>Thanks</p>
                        <p>:D</p>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sale;
