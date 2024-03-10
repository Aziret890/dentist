import { TbUserSquare } from 'react-icons/tb'
import teeth from '../../../shared/assets/images/teeth.png'
import './year.scss'
const Year = () => {
  return (
    <div className="container font-bold year">
      <h1 className="text-3xl font-black my-11 text-center my-5 code__h1">Имплантация зубов с тройной гарантией</h1>
      <div
        data-aos="zoom-in"
        data-aos-duration={1000}
        className="w-full rounded-lg h-[392px] bg-[#2CB2BB] parent-content"
      >
        <div className="inline-flex items-start justify-between px-14 content">
          <div className="w-[520px] first-child h-[96px] my-11">
            <div className="">
              <h1 className="text-3xl text-white ">
                Гарантия на импланты <br /> от 10 лет
              </h1>
              <div className="inline-flex parent-content-card">
                <ul className="">
                  <li className="inline-flex items-center gap-4 my-5 content-card">
                    <span className="w-[34px] h-[34px] rounded-lg bg-white inline-flex items-center justify-center text-[#2CB2BB]">
                      <TbUserSquare />
                    </span>
                    <h4 className="text-sm text-white">
                      Качественные <br /> материалы
                    </h4>
                  </li>
                  <li className="inline-flex items-center  gap-4 my-5  content-card">
                    <span className="w-[34px] h-[34px] rounded-lg bg-white inline-flex items-center justify-center text-[#2CB2BB]">
                      <TbUserSquare />
                    </span>
                    <h4 className="text-sm text-white">
                      Качественные <br /> материалы
                    </h4>
                  </li>
                </ul>
                <ul className="">
                  <li className="inline-flex items-center  gap-4 my-5 ml-11  content-card">
                    <span className="w-[34px] h-[34px] rounded-lg bg-white inline-flex items-center justify-center text-[#2CB2BB]">
                      <TbUserSquare />
                    </span>
                    <h4 className="text-sm text-white">
                      Качественные <br /> материалы
                    </h4>
                  </li>
                  <li className="inline-flex items-center  gap-4 my-5 ml-11  content-card">
                    <span className="w-[34px] h-[34px] rounded-lg bg-white inline-flex items-center justify-center text-[#2CB2BB]">
                      <TbUserSquare />
                    </span>
                    <h4 className="text-sm text-white">
                      Качественные <br /> материалы
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={teeth} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Year
