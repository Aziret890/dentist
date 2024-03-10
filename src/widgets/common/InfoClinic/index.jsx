import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './Clinic.css'
import PicClinic from './Rectangle 56.png'
import PicClinic2 from './Rectangle 57.png'
import CheckCircle from './check-circle 1.png'
const Clinic = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios('https://akmatovt.pythonanywhere.com/clinic/').then((res) => setData(res.data))
  }, [])
  return (
    <div id="clinic">
      <div className="container">
        <div className="clinic">
          <div className="photos-clinic block">
            <img data-aos="fade-left" data-aos-duration={1 * 300} src={PicClinic} alt="image :/" />
            <img data-aos="fade-left" data-aos-duration={2 * 300} src={PicClinic2} alt="image :/" />
          </div>
          <div className="clinic-title">
            <h1 data-aos="fade-up" data-aos-duration={1 * 300}>
              {data[0]?.title}
            </h1>
            <p data-aos="fade-up" data-aos-duration={2 * 300}>
              Подробнее <FaArrowRight style={{ marginLeft: '10px' }} />
            </p>
          </div>
          <div className="info-clinic">
            <div className="clinic-description">
              <p data-aos="fade-up" data-aos-duration={3 * 300}>
                Стоматологическая клиника «Ника» на протяжении 20 лет оказывает высококвалифицированные
                стоматологические услуги для жителей Иркутска и Иркутской области. За это время нам удалось сформировать
                коллектив, состоящий полностью из высококлассных специалистов, на вооружении у которых новейшие методы и
                технологии. <br /> <br />
                Главный принцип лечения в нашем медицинском учреждении — это индивидуальный комплексный подход к каждому
                клиенту и высокое качество проводимых процедур. <br />
                <br /> На сегодняшний день мы без преувеличения можем сказать, что являемся одной из самых передовых
                стоматологических клиник г. Иркутска. А все это стало возможным благодаря тысячам довольных пациентов.{' '}
                <br />
                <br /> Мы оказываем весь комплекс передовых услуг в области высококвалифицированной стоматологии,
                включая эстетическую стоматологию, протезирование зубов любой сложности, лечение кариеса, пломбирование
                каналов, исправление прикуса без брекетов, художественную реставрацию, профессиональное отбеливание
                ZOOM, лечение неприятного запаха изо рта, установку голливудских виниров (люминиры) и многие другие
                услуги. За плечами наших специалистов — большой опыт работы и владение передовыми методиками лечения.
                <br />
                <br />
                <span data-aos="fade-up" data-aos-duration={4 * 300} className="span-description-clinic">
                  Мы работаем ради вас и вашего здоровья! <br />
                  Стоматология — это наше призвание!
                </span>
              </p>
            </div>
            <div className="pic-clinic">
              <div className="photos-clinic none">
                <img data-aos="fade-left" data-aos-duration={1 * 300} src={PicClinic} alt="image :/" />
                <img data-aos="fade-left" data-aos-duration={2 * 300} src={PicClinic2} alt="image :/" />
              </div>
              <div data-aos="fade-left" data-aos-duration={1 * 300} className="guarant-clinic">
                <img data-aos="fade-left" data-aos-duration={2 * 300} src={CheckCircle} alt="" />
                <h2 data-aos="fade-left" data-aos-duration={3 * 300}>
                  Спасаем 99% зубов рекомендованных к удалению
                </h2>
                <p data-aos="fade-left" data-aos-duration={4 * 300}>
                  Лечение зубов без боли и неприятных ощущений в Иркутске
                </p>
                <p data-aos="fade-left" data-aos-duration={5 * 300}>
                  Для лечения своих пациентов мы используем только сертифицированные и проверенные препараты,
                  качественное оборудование и новейшие методики
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clinic
