import './description.scss'
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
            <img
              className="w-[284px] h-[284px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/89bb/20a3/a84e94f865532327bb985c95a6a3f5b3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G19wCyPRr8wuOcJuiMt~8b8YMl8EwKUEkQOHZwzSyWxoGg9MkL~o4hpyT33OsMVJi3rjPpWRcPsq6-eFJy~0MZx0nCv2of0G~vdtweUc04iUdH9JMivnJjvYrX2U3L05aTPJGaTxYy6T01txg8xRKXRSU3M-LIkxcLUv-orND3tF5U82otPMtm~JSEZdk1DHI0XbO9iXypWKLOAmyeMOEjTXpUmn0t24AqtnHzEVH6BpEUC486PcxkjZkchMdy-QFlg~LSSzYiwNzp-p~dmOPal2FGY8r1uX9QI82y07WF4QFg6AYfs9wS8YlQdH2DpigH40J9I0qeqlBL7j8jHPYQ__"
              alt="img"
            />
            <img
              className="w-[284px] h-[284px] object-cover"
              src="https://s3-alpha-sig.figma.com/img/6a0c/b970/90fa7bd9690235622413d2d8f341a7af?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YgaEOEumvS8sio7KuZVudfw~e-epCokUKlVUBbt-uT57GS4SP6FBfGGc33Um0gYEI-GvUEmtkM9kPoLJEKje1VznszqRqdpeno1Xk9B1F8dfQ4VJ9pRpGgSz~ecPSLICF9vvTeK2A10NMd7cXBWLGcQubPjCE~vyLeBrl7NAdXcYEQSDXvayreC4Co63Tb-SL84Zuz0RZhyMHaRfOmxevP9CkB4kbTYd0BzSut9JgmXUYq8KSPWaFHpeUR5NfdDtJM5Q5tCqPq7zF287ohAwQKpBhQPHa00TuuIFhxEAr62YvBZAtCs4TdPhB-e1KcqnhPrNPbx64Wzsc~HI1RyHkg__"
              alt="img"
            />
          </div>
          <img
            className="w-[284px] h-[592px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/49e3/3530/bac9baf48612f765c8afc450157768a7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckI7zJctIw10UU~vh5FbPZUc1QiTUIa-ThoQuHCuXwYGQGSjXCCUwhdPH9aWb-sMLVnakUuilhg9MLdoxRsCquOdiFFX7xO-o8eDrh4mlWkc1P654MvG6I6uEmCNFw9C~6cKGUACZMXAk-DOo~-4FjtrJyJSB5hpmFZx9T9kc7ON1AzXTA0~noz82o~vQDN4xuJff5a74obyLIH5UewDsX7wIPYeVS9BFPKds6z7C9oafl0FQoJGBQMDafrDjSeHSMoGKn2-zA1inTtx6vvUKrklZr2p1hvuvUSwEISo~vfZFBBn~yvV7VizD~DlaiBnz20FrGglhPRJPZqoWEZlnA__"
            alt="img
					"
          />
        </div>
      </div>
    </div>
  )
}

export default Description
