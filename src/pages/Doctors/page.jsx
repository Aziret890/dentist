import clsx from 'clsx'
import DoctorResult from './components/DoctorResult'
import DoctorSearch from './components/DoctorSearch'
import styles from './page.module.scss'
import { useEffect } from 'react'
import DoctorSpecTabs from './components/DoctorSpecTabs'
export default function Doctors() {
  useEffect(() => {
    document.title = 'Doctors'
  }, [])

  return (
    <main className={styles.doctors}>
      <div className={clsx(`${styles['start']} w-full h-[52px] opacity-60 pt-3 text-white bg-[#2CB2BB]`)}>
        <div className="container">Врачи</div>
      </div>
      <div className={`${styles.container} container pt-20`}>
        <h1 className="text-center w-full text-[40px] leading-[48px] font-black mb-10">Врачи</h1>
        <DoctorSpecTabs />
        <hr className={styles.hr} />
        <DoctorSearch />
        <DoctorResult />

        <div className="flex items-start flex-col gap-10 mt-16">
          <div className={styles.bottom}>
            <h4>Ортодонты</h4>
            <p>
              Специализируются на коррекции расположения зубов и прикуса. Современные капы и брекеты в руках опытного
              специалиста позволяют создать идеально ровную и красивую улыбку в любом возрасте. Вопреки
              распространённому мнению, кривые зубы и неправильный прикус являются не просто эстетически
              непривлекательными. Это серьёзная патология, которая в дальнейшем может привести к более сложным
              заболеваниям. Запись к стоматологу «НоваДент» позволит в ближайшее время стать обладателем улыбки, о
              которой вы давно мечтали.
            </p>
          </div>
          <div className={styles.bottom}>
            <h4>Гигиенисты</h4>
            <p>
              Хронический воспалительный процесс может привести к порче и потере зуба. Домашние гигиенические процедуры
              не всегда могут обеспечить идеальную чистоту. Решить эту проблему поможет запись на прием к стоматологу
              для проведения профессиональной чистки. Такая процедура позволяет избавиться от налёта и камня, вернуть
              природную белизну зубов, остановить кровоточивость дёсен. В результате улыбка сияет здоровьем, а дыхание –
              свежестью. <br /> <br /> Цена на процедуры зависит от состояния ротовой полости и «фронта работ», поэтому
              точная стоимость будет озвучена после визуального осмотра.
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </main>
  )
}
