import React from "react";
import "./Service.css";
import teethPic from "./tooth-outline 1.png";

const Services = () => {
  return (
    <div className="container">
      <div className="service">
        <div className="top ">
          <h1>Все услуги</h1>
          <div className="first-top">
            <h6>Поиск по направлениям</h6>
            <div className="circle">
              <p>18</p>
            </div>
          </div>
          <div className="second-top">
            <h6>Поиск по проблемам</h6>
            <div className="circle">
              <p>15</p>
            </div>
          </div>
          <div className="third-top">
            <h6>Когда все запущено</h6>
            <div className="circle">
              <p>5</p>
            </div>
          </div>
        </div>
        <div className="middle">
          <h5>Восстановить зуб</h5>
          <h5>Восстановить все зубы</h5>
          <h5>Вылечить зубы</h5>
          <h5>Красивая улыбка</h5>
        </div>
        <div className="bottom">
          <div className="first-bottom">
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Имплантация зубов</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Коронка на зуб</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Мост из коронок</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Съёмное протез-ие зубов</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Виниры</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Худож. реставрация зубов</p>
            </div>
          </div>
          <div className="second-bottom">
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Все зубы за 1 день All-on-4</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Имплантация All-on-6</p>
            </div>
          </div>
          <div className="third-bottom">
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Лечение зубов</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Лечение кариеса</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Лечение пульпита</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Лечение периодонтита</p>
            </div>
          </div>
          <div className="fourth-bottom">
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Pro чистка зубов</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Отбеливание зубов</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Отбеливание Zoom</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Худож. реставрация зубов</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Виниры</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Брекеты</p>
            </div>
            <div className="teeth-services">
              <img src={teethPic} alt="" />
              <p>Скайсы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
