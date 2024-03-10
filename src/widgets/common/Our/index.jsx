import axios from 'axios'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../../../entity/hooks/useWindowSize'
import './our.css'

const Our = () => {
  const [data, setData] = useState([])
  const { width } = useWindowSize()
  useEffect(() => {
    axios.get('https://akmatovt.pythonanywhere.com/advantage/').then((res) => setData(res.data))
  }, [])
  return (
    <div className="container">
      <div className="py-11 740:py-5 540:py-0">
        <div
          className={`our flex items-center my-11 ${width <= 840 ? 'flex-wrap gap-5' : 'flex-wrap gap-3'}`}
          style={{
            justifyContent: width <= 840 ? 'flex-start' : 'space-between',
          }}
        >
          <h2 className="text-3xl font-bold text-left">Наши преимущества</h2>
          <div className="flex items-center gap-5">
            <h1 className="text-[#2CB2BB] text-4xl font-bold">10 000</h1>
            <h5 className="text-lg font-medium ">
              Довольных <br /> клиентов
            </h5>
          </div>
          <div className="flex items-center gap-5">
            <h1 className="text-[#2CB2BB] text-4xl font-bold">3 650</h1>
            <h5 className="text-lg font-medium ">
              Дней успешной <br /> работы
            </h5>
          </div>
          <div className="flex items-center gap-5">
            <h1 className="text-[#2CB2BB] text-4xl font-bold">28</h1>
            <h5 className="text-lg font-medium ">
              Опытных <br /> сотрудников
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-4 doc-parent">
          {data.map((el) => (
            <div key={el.id} data-aos="zoom-out-up" data-aos-duration={1000} className="doctor">
              <img src={`https://akmatovt.pythonanywhere.com/media/${el.image}`} alt="" />
              <h2>{el.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Our
