import { useRef, useState } from 'react'
import './example_work.scss'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import useOutsideClick from '../../../entity/hooks/useOutsideClick'

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
}
const Workexamples = () => {
  const [show, setShow] = useState(0)

  const outSideRef = useRef()
  const { data } = useQuery({
    queryKey: ['services_doc_examples_of_work'],
    queryFn: async () => {
      return (await axios(`https://akmatovt.pythonanywhere.com/example/`)).data
    },
  })
  useOutsideClick(() => {
    setShow(0)
  }, outSideRef)
  return (
    <div className="container pt-28">
      <section id="section4" className="mb-20">
        <div className="flex mb-5 items-center w-full justify-between top-start">
          <h1 data-aos="fade-up">Примеры работ врача</h1>
          <button data-aos="fade-up" className={'all_examples'}>
            Все примеры работ
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.33301 8H12.6663"
                stroke="#2CB2BB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.33301L12.6667 7.99967L8 12.6663"
                stroke="#2CB2BB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <ul className={'examples-content'}>
          {data &&
            data.map((item, idx) => (
              <motion.li
                key={idx}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: idx * 0.2,
                  ease: 'easeInOut',
                  duration: 0.25,
                }}
                viewport={{ amount: 0 }}
              >
                <div className={'images'}>
                  <img
                    data-aos="fade-up"
                    src={'https://akmatovt.pythonanywhere.com/media/' + item?.sub_example?.images}
                    alt={item.sub_example.doctor.firstName}
                  />
                </div>
                <div className={'content'}>
                  <div data-aos="fade-up" data-aos-duration={500}>
                    <h4>Технология</h4>
                    <h6>{item?.sub_example?.technology}</h6>
                  </div>
                  <div data-aos="fade-up" data-aos-duration={500}>
                    <h4>Врач</h4>
                    <h6>
                      {item?.sub_example?.doctor?.firstName} {item?.sub_example?.doctor?.lastName}
                    </h6>
                  </div>
                  <div data-aos="fade-up" data-aos-duration={500}>
                    <h4>Срок лечения</h4>
                    <h6>{item?.sub_example?.duration} дней</h6>
                  </div>
                </div>
                <button
                  className={`flex items-center justify-center w-full my-3 ${show === idx + 1 ? 'rotate-180' : ''}`}
                  onClick={() => setShow((prev) => (prev === idx + 1 ? 0 : idx + 1))}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_202_1495)">
                      <path
                        d="M9.99967 13.3337L7.08301 10.417M9.99967 6.66699V13.3337V6.66699ZM9.99967 13.3337L12.9163 10.417L9.99967 13.3337Z"
                        stroke="#2CB2BB"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
                        stroke="#2CB2BB"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_202_1495">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <div
                  className={clsx('show__content', {
                    active: show === idx + 1,
                  })}
                  ref={outSideRef}
                >
                  <h4>История обращения клиента</h4>
                  <p>{item.sub_example.history}</p>
                  <h3>Отзыв пациента</h3>
                  <p>{item.sub_example.review.title}</p>
                </div>
              </motion.li>
            ))}
        </ul>
      </section>
    </div>
  )
}

export default Workexamples
