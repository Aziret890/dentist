import { SwiperSlide, Swiper } from 'swiper/react'
import { Keyboard, Pagination } from 'swiper/modules'
import clsx from 'clsx'
import './Certificate.scss'

export default function Certificate() {
  return (
    <div className="mt-10">
      <section id="section3" className="mb-20">
        <h1 className="mb-10" data-aos="fade-up">
          Лицензии и сертификаты врача
        </h1>
        <Swiper
          modules={[Keyboard, Pagination]}
          spaceBetween={10}
          slidesPerView={4}
          keyboard
          pagination={{ clickable: true }}
          className={clsx(`licenses-content`)}
        >
          {licenses &&
            licenses.map((item, idx) => (
              <SwiperSlide key={idx}>
                <li data-aos="fade-up" data-aos-duration={idx * 500}>
                  <div className={'licenses-image'}>
                    <img src={item.photo} alt="" />
                  </div>
                  <h4>{item.text}</h4>
                </li>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </div>
  )
}
const licenses = [
  {
    photo:
      'https://s3-alpha-sig.figma.com/img/83be/8359/202fb8a7295949b276bd2bd0400c8ebf?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cHBfFORHIV7qgalbhpUtM980V0AxYZMSPhcBDbO8XegVWCaskuFt5-zKJO1GkrPGIfbCjf8nPQAYI0Ip07llLfeTfbRfdJdjgjxKOSqJ4E0gX1kR6EOa8VPLArXges~-FupwSiNXaO~29F3YZcwLRci7n64FR9TbEf4sy~SicZsCWcUarG~DpAwZAcliErDE0a4CaXZxChXBpyzl0WlpGCEQYZysqoUJbemhE1BXxrnfP~hk4M4NrWynZ5NPSoMPOR6vyBsufDOMp2jBN1pQgKHp8WyTSqORW~GZZJ84Om~XCEUGMOt7vInh4VNjrHwks4YKwK~nNtVxqO2iHv6jZg__',
    text: 'Название сертификата в две строки максимум...',
  },
  {
    photo:
      'https://s3-alpha-sig.figma.com/img/c4bf/73f7/2e42d0a903b024ae98134ab3885004d4?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MHayRmT5XfTA0l91fvB1oRHO2vgzVtIA8zmBhPRbv2ULc8nNqDEjvVLKKQZ6JyqCr1~BrHxdDhlttxMQ4AJF5K16VSScbMmwFOzJHkI3AYEguhVf4OFsc3w63cSpK1rcE-9pBXnzbGzu~EUy39IvJDarOu83pA7~DPigyBQG1Aq1hc4I3xP4OR1YuBT4CoWM4xG262rxAI02NyvG0KoTsShaTtgbiOZ4Nwg4hbS8BIUCYeMMfVM6LD4-dQmmTfdeK6FfbdzT6pPs190QIm19-0KeZqnsQ00QkNhwsp0vGmyAYOcx~YBrXxnoqnggJ712qdsD~Wp5KYtOlDheOtdfxg__',
    text: 'Название в одну строку',
  },
  {
    photo:
      'https://s3-alpha-sig.figma.com/img/c4bf/73f7/2e42d0a903b024ae98134ab3885004d4?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MHayRmT5XfTA0l91fvB1oRHO2vgzVtIA8zmBhPRbv2ULc8nNqDEjvVLKKQZ6JyqCr1~BrHxdDhlttxMQ4AJF5K16VSScbMmwFOzJHkI3AYEguhVf4OFsc3w63cSpK1rcE-9pBXnzbGzu~EUy39IvJDarOu83pA7~DPigyBQG1Aq1hc4I3xP4OR1YuBT4CoWM4xG262rxAI02NyvG0KoTsShaTtgbiOZ4Nwg4hbS8BIUCYeMMfVM6LD4-dQmmTfdeK6FfbdzT6pPs190QIm19-0KeZqnsQ00QkNhwsp0vGmyAYOcx~YBrXxnoqnggJ712qdsD~Wp5KYtOlDheOtdfxg__',
    text: 'Название сертификата в две строки максимум...',
  },
  {
    photo:
      'https://s3-alpha-sig.figma.com/img/106f/4a10/0b13ba0e0b9cf9797e0d7a633b03821b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ch7EvOu9b66rcjA79vCNQ57KbuUUstr62McJqjTGhaJTC6q-0mw8xfPcnwcsxtnEkNiTH3XhaQ-K3unv89pJvxgbf5O6eTSKPAlgMmrFjwKPyzGiLbY-oBdsG6EFhZPc~DJ3Bfqzs~tzGxf5i~ZR7t5nUMF1nGaDLe94lLl75QEz6v28RO83X7rOaoxvl0W1tAkIoNWisyczvNRa8upKiXVINAmp9vOxLfvIqcs2ULuNEQNMPJE9yPGjVDD6TEMU9z73Z17P-PZIuMSxhTN-c24D5bN-RomrrMgZiO3mgLfZUPyFmailjfz8RJk39rn21PPf8qm1liyJA3Y8bT79kA__',
    text: 'Название в одну строку',
  },
  {
    photo:
      'https://s3-alpha-sig.figma.com/img/83be/8359/202fb8a7295949b276bd2bd0400c8ebf?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cHBfFORHIV7qgalbhpUtM980V0AxYZMSPhcBDbO8XegVWCaskuFt5-zKJO1GkrPGIfbCjf8nPQAYI0Ip07llLfeTfbRfdJdjgjxKOSqJ4E0gX1kR6EOa8VPLArXges~-FupwSiNXaO~29F3YZcwLRci7n64FR9TbEf4sy~SicZsCWcUarG~DpAwZAcliErDE0a4CaXZxChXBpyzl0WlpGCEQYZysqoUJbemhE1BXxrnfP~hk4M4NrWynZ5NPSoMPOR6vyBsufDOMp2jBN1pQgKHp8WyTSqORW~GZZJ84Om~XCEUGMOt7vInh4VNjrHwks4YKwK~nNtVxqO2iHv6jZg__',
    text: 'Название сертификата в две строки максимум...',
  },
  {
    photo:
      'https://s3-alpha-sig.figma.com/img/c4bf/73f7/2e42d0a903b024ae98134ab3885004d4?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MHayRmT5XfTA0l91fvB1oRHO2vgzVtIA8zmBhPRbv2ULc8nNqDEjvVLKKQZ6JyqCr1~BrHxdDhlttxMQ4AJF5K16VSScbMmwFOzJHkI3AYEguhVf4OFsc3w63cSpK1rcE-9pBXnzbGzu~EUy39IvJDarOu83pA7~DPigyBQG1Aq1hc4I3xP4OR1YuBT4CoWM4xG262rxAI02NyvG0KoTsShaTtgbiOZ4Nwg4hbS8BIUCYeMMfVM6LD4-dQmmTfdeK6FfbdzT6pPs190QIm19-0KeZqnsQ00QkNhwsp0vGmyAYOcx~YBrXxnoqnggJ712qdsD~Wp5KYtOlDheOtdfxg__',
    text: 'Название в одну строку',
  },
  {
    photo:
      'https://s3-alpha-sig.figma.com/img/c4bf/73f7/2e42d0a903b024ae98134ab3885004d4?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MHayRmT5XfTA0l91fvB1oRHO2vgzVtIA8zmBhPRbv2ULc8nNqDEjvVLKKQZ6JyqCr1~BrHxdDhlttxMQ4AJF5K16VSScbMmwFOzJHkI3AYEguhVf4OFsc3w63cSpK1rcE-9pBXnzbGzu~EUy39IvJDarOu83pA7~DPigyBQG1Aq1hc4I3xP4OR1YuBT4CoWM4xG262rxAI02NyvG0KoTsShaTtgbiOZ4Nwg4hbS8BIUCYeMMfVM6LD4-dQmmTfdeK6FfbdzT6pPs190QIm19-0KeZqnsQ00QkNhwsp0vGmyAYOcx~YBrXxnoqnggJ712qdsD~Wp5KYtOlDheOtdfxg__',
    text: 'Название сертификата в две строки максимум...',
  },
  {
    photo:
      'https://s3-alpha-sig.figma.com/img/106f/4a10/0b13ba0e0b9cf9797e0d7a633b03821b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ch7EvOu9b66rcjA79vCNQ57KbuUUstr62McJqjTGhaJTC6q-0mw8xfPcnwcsxtnEkNiTH3XhaQ-K3unv89pJvxgbf5O6eTSKPAlgMmrFjwKPyzGiLbY-oBdsG6EFhZPc~DJ3Bfqzs~tzGxf5i~ZR7t5nUMF1nGaDLe94lLl75QEz6v28RO83X7rOaoxvl0W1tAkIoNWisyczvNRa8upKiXVINAmp9vOxLfvIqcs2ULuNEQNMPJE9yPGjVDD6TEMU9z73Z17P-PZIuMSxhTN-c24D5bN-RomrrMgZiO3mgLfZUPyFmailjfz8RJk39rn21PPf8qm1liyJA3Y8bT79kA__',
    text: 'Название в одну строку',
  },
]
