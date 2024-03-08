import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import axios from "axios";
import MoreDetail from "../../widgets/MoreDetail";
import { useMoreDetail } from "../../entity/more_detail/store";

export default function News() {
  const [indexPage, setIndexPage] = useState(0);
  const [objData, setObjData] = useState({});
  const [data, setData] = useState([]);
  const { setModallContent } = useMoreDetail();

  useEffect(() => {
    axios("https://akmatovt.pythonanywhere.com/news/").then((res) =>
      setData(res.data)
    );
    axios(`https://akmatovt.pythonanywhere.com/news/${indexPage}/`).then(
      (res) => setObjData(res.data)
    );
  }, [indexPage]);

  return (
    <main>
      <section className="pt-10 container">
        <h1 className={styles.h1}>Новости</h1>
        <div className="flex items-start flex-wrap gap-5 justify-between">
          {data.map((item, idx) => (
            <li key={idx}>
              <div
                onClick={() => {
                  setModallContent(() => <div>{objData.description2}</div>);
                  setIndexPage(item.id);
                }}
                data-aos="fade-up"
                data-aos-duration={idx * 100}
                className={styles["newCard"]}
              >
                <div>
                  <h3>{item.title1}</h3>
                  <p>{item.description1}</p>
                </div>
                <p>
                  <span>{item.date}</span>
                </p>
              </div>
            </li>
          ))}
        </div>
      </section>
    </main>
  );
}

// const cardData = [
//   {
//     title: "Уникальная технология – Компьютерная анестезия STA",
//     info: "Болезненное обезболивание уколами теперь в прошлом. Ведь мы привезли в Иркутск уникальную компьютерную анестезию STA – технологию, позволяющую лечить зубы без страха и боли",
//     date: "20 сентрября",
//   },
//   {
//     title: "Введена бонусная программа UDSgame",
//     info: "Друзья, у нас для вас отличная новость. В нашей клинике действует бонусная система",
//     date: "19 сентрября",
//   },
//   {
//     title: "В клинике начали использовать 3D каппы",
//     info: "Выравнять зубы и исправить раз и навсегда прикус! Об этом мечтают многие из нас. Но зачастую, уже будучи взрослым человеком, мы не можем себе позволить носить брекеты",
//     date: "5 июля",
//   },
//   {
//     title: "Новая технология удаления зубов",
//     info: "При выборе стоматологической клиники помните, что низкие цены — это неминуемо низкое качество услуги",
//     date: "15 декабря 2020",
//   },
//   {
//     title: "Уникальная технология – Компьютерная анестезия STA",
//     info: "Болезненное обезболивание уколами теперь в прошлом. Ведь мы привезли в Иркутск уникальную компьютерную анестезию STA – технологию, позволяющую лечить зубы без страха и боли",
//     date: "20 сентрября",
//   },
//   {
//     title: "Введена бонусная программа UDSgame",
//     info: "Друзья, у нас для вас отличная новость. В нашей клинике действует бонусная система",
//     date: "19 сентрября",
//   },
//   {
//     title: "В клинике начали использовать 3D каппы",
//     info: "Выравнять зубы и исправить раз и навсегда прикус! Об этом мечтают многие из нас. Но зачастую, уже будучи взрослым человеком, мы не можем себе позволить носить брекеты",
//     date: "5 июля",
//   },
//   {
//     title: "Новая технология удаления зубов",
//     info: "При выборе стоматологической клиники помните, что низкие цены — это неминуемо низкое качество услуги",
//     date: "15 декабря 2020",
//   },
//   {
//     title: "Уникальная технология – Компьютерная анестезия STA",
//     info: "Болезненное обезболивание уколами теперь в прошлом. Ведь мы привезли в Иркутск уникальную компьютерную анестезию STA – технологию, позволяющую лечить зубы без страха и боли",
//     date: "20 сентрября",
//   },
//   {
//     title: "Введена бонусная программа UDSgame",
//     info: "Друзья, у нас для вас отличная новость. В нашей клинике действует бонусная система",
//     date: "19 сентрября",
//   },
//   {
//     title: "В клинике начали использовать 3D каппы",
//     info: "Выравнять зубы и исправить раз и навсегда прикус! Об этом мечтают многие из нас. Но зачастую, уже будучи взрослым человеком, мы не можем себе позволить носить брекеты",
//     date: "5 июля",
//   },
//   {
//     title: "Новая технология удаления зубов",
//     info: "При выборе стоматологической клиники помните, что низкие цены — это неминуемо низкое качество услуги",
//     date: "15 декабря 2020",
//   },
// ];
