import React from "react";
import medal from "../../shared/assets/images/medal.svg";
import ButtonRoutes from "../../pages/sale/ButtonRoutes";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./Price.scss";
import PriceSortAll from "./PriceSortAll";
import PriceReStart from "./PriceReStart";
import PriceCure from "./PriceCure";
import PriceBetifulSmile from "./PriceBetifulSmile";
import pricePhoto1 from "../../shared/assets/images/price-photo1.png";
import pricePhoto2 from "../../shared/assets/images/price-photo2.png";
import pricePhoto3 from "../../shared/assets/images/price-photo3.png";
import pricePhoto4 from "../../shared/assets/images/price-photo4.png";

function Price() {
  return (
    <section className="price mt-[98px]">
      <div className="container">
        <div className="price__content">
          <div className="price__btns">
            <ButtonRoutes />
          </div>
          <div className="price__sort mt-[64px] flex justify-between">
            <NavLink
              className={"price__sort-xa"}
              to={`/about/clinikInfo/restart`}
            >
              <p className="text-center mb-1">Восстановить зуб</p>
              <div className="price__sort__div-none"></div>
            </NavLink>
            <NavLink className={"price__sort-xa"} to={`/about/clinikInfo/all`}>
              <p className="text-center mb-1">Восстановить все зубы</p>
              <div className="price__sort__div-none"></div>
            </NavLink>
            <NavLink className={"price__sort-xa"} to={`/about/clinikInfo/cure`}>
              <p className="text-center mb-1">Вылечить зубы</p>
              <div className="price__sort__div-none"></div>
            </NavLink>
            <NavLink
              className={"price__sort-xa"}
              to={`/about/clinikInfo/buetifull`}
            >
              <p className="text-center mb-1">Красивая улыбка</p>
              <div className="price__sort__div-none"></div>
            </NavLink>
          </div>
          <hr className="w-full h-1 mt-2" />
          <div className="price__info flex justify-between">
            <Routes>
              <Route path="/about/clinikInfo/all" element={<PriceSortAll />} />
              <Route
                path="/about/clinikInfo/restart"
                element={<PriceReStart />}
              />
              <Route path="/about/clinikInfo/cure" element={<PriceCure />} />
              <Route
                path="/about/clinikInfo/buetifull"
                element={<PriceBetifulSmile />}
              />
            </Routes>
            <div className="price__content__images flex flex-col gap-[20px]">
              <img src={pricePhoto1} alt="" />
              <div className="price__content__images__child flex justify-between">
                <div className="price__content__images__child-flex flex flex-col gap-[23px]">
                  <img src={pricePhoto2} alt="" />
                  <img src={pricePhoto4} alt="" />
                </div>
                <img
                  className="price__content__images__child-images2"
                  src={pricePhoto3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
