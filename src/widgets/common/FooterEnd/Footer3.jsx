import { NavLink } from "react-router-dom";
import "./footer.css"
const Footer3 = () => {
  return (
    <div className="container">
        <hr />
      <div className="my-11 flex items-start justify-between hov">


      <div className="flex flex-col w-[284px]">
          <NavLink className=" text-[#2CB2BB] font-bold mb-2">Красивая улыбка</NavLink>
          <NavLink className="text-xs leading-[20px]">Профессиональная чистка зубов</NavLink>
          <NavLink className="text-xs leading-[20px]">Отбеливание зубов</NavLink>
          <NavLink className="text-xs leading-[20px]">Отбеливание Zoom</NavLink>
          <NavLink className="text-xs leading-[20px]">Художественная реставрация зубов</NavLink>
          <NavLink className="text-xs leading-[20px]">Виниры</NavLink>
          <NavLink className="text-xs leading-[20px]">Брекеты</NavLink>
          <NavLink className="text-xs leading-[20px]">Скайсы</NavLink>
        </div>
        <div className="flex flex-col w-[284px]">
          <NavLink className=" text-[#2CB2BB] font-bold mb-2">Восстановить зуб</NavLink>
          <NavLink className="text-xs leading-[20px]">Имплантация зубов</NavLink>
          <NavLink className="text-xs leading-[20px]">Коронка на зуб</NavLink>
          <NavLink className="text-xs leading-[20px]">Мост из коронок</NavLink>
          <NavLink className="text-xs leading-[20px]">Съемное протезирование зубов</NavLink>
          <NavLink className="text-xs leading-[20px]">Виниры</NavLink>
          <NavLink className="text-xs leading-[20px]">Художественная реставрация зубов</NavLink>
        </div>
        <div className="flex flex-col w-[284px]">
          <NavLink className=" text-[#2CB2BB] font-bold mb-2">Вылечить зубы</NavLink>
          <NavLink className="text-xs leading-[20px]">Лечение зубов</NavLink>
          <NavLink className="text-xs leading-[20px]">Лечение кариеса</NavLink>
          <NavLink className="text-xs leading-[20px]">Лечение пульпита</NavLink>
          <NavLink className="text-xs leading-[20px]">Лечение периодонтита</NavLink>
        </div>
        <div className="flex flex-col w-[284px]">
          <NavLink className=" text-[#2CB2BB] font-bold mb-2">Восстановить все зубы</NavLink>
          <NavLink className="text-xs leading-[20px]">Все зубы за 1 день All-on-4</NavLink>
          <NavLink className="text-xs leading-[20px]">Имплантация All-on-6</NavLink>
        </div>


      </div>
    </div>
  );
};

export default Footer3;
