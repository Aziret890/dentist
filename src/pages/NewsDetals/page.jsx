import { useEffect, useState } from 'react'
import './components/NewsDetals.scss'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function NewsDetail() {
  const [data, setData] = useState({})
  const nav = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    axios(`https://akmatovt.pythonanywhere.com/news/${id}/`).then((res) => setData(res.data))
  }, [])
  console.log(data.images)
  return (
    <section className="new-detal">
      <div className="new-detal__up">
        <div className="container">
          <h1>{data.title1}</h1>
          <p>{data.date}</p>
        </div>
      </div>
      <div className="container">
        <div className="new-detal__content">
          <div className="new-detal__content__left">
            <p>{data?.description1}</p>
            <h1>Как проводится процедура</h1>
            <p>{data?.description2}</p>
            <div className="flex justify-between max-w-[595px] mt-[30px]">
              {/* <div className="flex flex-col gap-6 h-full">
                <img
                  src={
                    "https://akmatovt.pythonanywhere.com/media/" +
                    data?.images[1]
                  }
                  alt=""
                />
                <img
                  src={
                    "https://akmatovt.pythonanywhere.com/media/" +
                    data?.images[3]
                  }
                  alt=""
                />
              </div>
              <img
                src={
                  "https://akmatovt.pythonanywhere.com/media/" + data?.images[0]
                }
                alt=""
              /> */}
            </div>
            <h1>{data.title3}</h1>
            <p>{data.description3}</p>
            <div className="w-[680px] mt-10">
              {/* <img
                width={"100%"}
                height={"100%"}
                src={
                  "https://akmatovt.pythonanywhere.com/media/" + data.images[1]
                }
                alt=""
              /> */}
            </div>
          </div>
          <div className="new-detal__content__right">
            <div className="new-detal__content__right-up">
              <img
                src="https://s3-alpha-sig.figma.com/img/ed5b/fced/6e86c2f2d4ca911795dd64fb907f67c0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pIreRW~4xXEUc7RRzIZiEJGoPWt59z0LaR0TJ6YDUwgpaEk4duY21a94YVNHqM3cGjmcsXUdtf7r54siW0HYLVMKp1Kmu9054Ta2rEKx3apXPF4G0unvfbOA1wf6DYrbvZHkdrPjHc4vVIS~grOGPIrWxZ45C2cWwlReqmvVxJlQPRiTkb0QXibAmoCPdAPgOhscufg7Jlx1ZrtoUVBX-cnOVrC-zo-AkgvApnIKrjw51ptqQVFZS9Qzk1eN3463tRRVtSJclu7zz9GLTO9l5lRS4wybqPRh5d~GvJMzbUWr5UTwTWE6hVnxZNAf~QcPMqAo0dlJpWT5uN71n54-tg__"
                alt=""
              />
              <div className="new-detal__content__right-up-green">
                <h2>Запись на консультацию</h2>
                <p>Не откладывайте, запишитесь на консультацию прямо сейчас, перезвоним через 15 минут</p>
                <button onClick={() => nav('/consultancy')}>Бесплатная консультация</button>
              </div>
            </div>
            <div className="new-detal__content__right-buttom"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsDetail
//aziret
//aziret
//aziret
