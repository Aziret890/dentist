import './description.scss'
import descriptionLeft1 from '../../../shared/assets/images/descriptionLeft1.png'
import descriptionLeft2 from '../../../shared/assets/images/descriptionLeft2.png'
import descriptionLeft3 from '../../../shared/assets/images/descriptionLeft3.png'

const Description = () => {
  return (
    <div className="container py-11">
      <div className="flex items-start justify-between desc-parent">
        <div data-aos="fade-right" data-aos-duration={1500} className="w-[550px] desc">
          <h1 className="text-3xl font-bold my-8">Описание услуги</h1>
          <div className="">
            <p className="leading-5 text-sm font-medium">
              Со временем по причинам отсутствия необходимых витаминов, травм, заболеваний полости рта и многих других,
              наши зубы изнашиваются и уже не способны выдерживать ежедневную жевательную нагрузку. Выпадение зубов в
              таких случаях лишь вопрос времени. <br /> <br /> Уровень современных стоматологий достаточно высок и
              сегодня при потере одного или даже целого ряда зубов можно восстановить не только жевательную функцию, но
              и естественную красоту улыбки с помощью протезирования. <br /> <br /> Протезирование зубов - процедура,
              которая позволить выполнить реконструкцию поврежденных зубов или установить протезы при полном их
              отсутствии. <br /> <br /> При полном отсутствии зуба на пустое место устанавливается имплант. По факту,
              это конструкция, заменяющая корень зуба, а сверху на неё устанавливается коронка. Поэтому, при выборе
              стоматологии всегда уточняйте, что входит в услугу «установка импланта». Некоторые клиники ставят лишь
              начальную конструкцию без коронки, из-за чего стоимость процедуры может быть значительно ниже, чем в
              стоматологиях, занимающихся установкой импланта под ключ.
            </p>
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-duration={1500} className="flex items-end desc-image">
          <div className="">
            <img className="w-[284px] h-[284px] object-cover" src={descriptionLeft1} alt="img" />
            <img className="w-[284px] h-[284px] object-cover" src={descriptionLeft2} alt="img" />
          </div>
          <img
            className="w-[284px] h-[592px] object-cover"
            src={descriptionLeft3}
            alt="img
					"
          />
        </div>
      </div>
    </div>
  )
}

export default Description
