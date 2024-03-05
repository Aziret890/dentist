import "./our.css";
import { TbUserSquare } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { FiTag } from "react-icons/fi";

const Our = () => {
  return (
    <div className="container">
      <div className="">
        <div className="our flex items-center justify-between my-11">
          <h2 className="text-3xl font-bold">Наши преимущества</h2>
          <h1 className="text-[#2CB2BB] text-4xl font-bold">10 000</h1>
          <h5 className="text-lg font-medium ">
            Довольных <br /> клиентов
          </h5>
          <h1 className="text-[#2CB2BB] text-4xl font-bold">3 650</h1>
          <h5 className="text-lg font-medium ">
            Дней успешной <br /> работы
          </h5>
          <h1 className="text-[#2CB2BB] text-4xl font-bold">28</h1>
          <h5 className="text-lg font-medium ">
            Опытных <br /> сотрудников
          </h5>
        </div>
        <div className="flex items-center flex-wrap gap-4">
          <div className="doctor">
            <h1>
              <TbUserSquare />
            </h1>
            <h2>Опытные врачи</h2>
          </div>
          <div className="doctor">
            <h1>
              <LuShieldCheck />
            </h1>
            <h2>Опытные врачи</h2>
          </div>
          <div className="doctor">
            <h1>
              <FiMessageSquare />
            </h1>
            <h2>Опытные врачи</h2>
          </div>
          <div className="doctor">
            <h1>
              <FiTag />
            </h1>
            <h2>Опытные врачи</h2>
          </div>
          <div className="doctor">
            <h1
            >
              <AiOutlineLike />
            </h1>
            <h2>Опытные врачи</h2>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default Our;
