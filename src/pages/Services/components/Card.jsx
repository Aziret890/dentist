import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import cardSim from '../../../shared/assets/images/cardSim.svg'
const Card = () => {
  return (
    <div className="container py-20">
      <div className="flex items-center justify-between">
        <div data-aos="zoom-out-right" className="bg-[#2CB2BB] w-[386px] h-[234px] rounded-lg">
          <div className="pt-20 mx-11 ">
            <div className="flex items-start justify-start flex-col ">
              <img src={cardSim} alt="" />
            </div>

            <h1 className="mt-3 text-white font-light text-2xl">
              <pre>1234 5678 9012 3456</pre>
            </h1>
            <div className="flex items-center justify-evenly mt-3">
              <h4 className="text-white text-[9px]">
                VALID <br /> THRU
              </h4>
              <div className="flex flex-col">
                <h3 className="text-white text-[9px]">MONTH/YEAR</h3>
                <h1 className="text-white">12/32</h1>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-left" className="mr-9">
          <h1 className="text-3xl font-bold text-[#253F41]">
            Установка импланта в рассрочку <br /> или кредит от 1 500 рублей в месяц
          </h1>
          <Link to={'/price?tabId=2'}>
            <h4 className="flex items-center gap-2 text-[#2CB2BB] font-bold text-sm mt-7 cursor-pointer">
              Читать подробнее <GrFormNextLink className="text-lg" />
            </h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
