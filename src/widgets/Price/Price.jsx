/* eslint-disable react/prop-types */
import clsx from "clsx";
import ButtonRoutes from "../../pages/Sale/ButtonRoutes";
import "./Price.scss";
import { useState } from "react";
import PriceSortAll from "./PriceSortAll";
import PriceReStart from "./PriceReStart";
import PriceCure from "./PriceCure";
import Sale from "../Sale/Sale";
import pricePhoto1 from "../../shared/assets/images/price-photo1.png";
import pricePhoto2 from "../../shared/assets/images/price-photo2.png";
import pricePhoto3 from "../../shared/assets/images/price-photo3.png";
import pricePhoto4 from "../../shared/assets/images/price-photo4.png";
function Price({ id }) {
  const [tabContentIndex, setTabContentIndex] = useState(0);
  console.log(tabContentIndex);
  return (
    <section className="price mt-[98px]">
      <div className="container">
        <div className="price__content">
          <center>{onTitle(id)}</center>
          <ButtonRoutes id={id} />
        </div>
        <div className="price__tab--content">
          {id === 0 ? (
            <>
              <div className="price__sort mt-[64px] flex justify-between">
                <button
                  onClick={() => setTabContentIndex(0)}
                  className={clsx("price__sort-xa", {
                    active: tabContentIndex === 0,
                  })}
                >
                  <p className="text-center mb-1">Восстановить зуб</p>
                  <div className="price__sort__div-none"></div>
                </button>
                <button
                  onClick={() => setTabContentIndex(1)}
                  className={clsx("price__sort-xa", {
                    active: tabContentIndex === 1,
                  })}
                >
                  <p className="text-center mb-1">Восстановить все зубы</p>
                  <div className="price__sort__div-none"></div>
                </button>
                <button
                  onClick={() => setTabContentIndex(2)}
                  className={clsx("price__sort-xa", {
                    active: tabContentIndex === 2,
                  })}
                >
                  <p className="text-center mb-1">Вылечить зубы</p>
                  <div className="price__sort__div-none"></div>
                </button>
                <button
                  onClick={() => setTabContentIndex(3)}
                  className={clsx("price__sort-xa", {
                    active: tabContentIndex === 3,
                  })}
                >
                  <p className="text-center mb-1">Красивая улыбка</p>
                  <div className="price__sort__div-none"></div>
                </button>
              </div>
              <hr className="w-full h-1" />
              {tabContentIndex == 1 ? (
                <PriceSortAll />
              ) : tabContentIndex == 2 ? (
                <PriceReStart />
              ) : // <h1>wv-nowev</h1>
              tabContentIndex == 3 ? (
                <PriceCure />
              ) : tabContentIndex == 0 ? (
                <PriceReStart />
              ) : (
                ""
              )}
            </>
          ) : id === 1 ? (
            "Акции"
          ) : id === 2 ? (
            <Sale />
          ) : id === 3 ? (
            "Бонусная программа"
          ) : id === 4 ? (
            "ДМС"
          ) : null}
        </div>
      </div>
    </section>
  );
}

function onTitle(index) {
  return (
    <h1>
      {!index
        ? "Цены"
        : index === 1
        ? "Акция"
        : index === 2
        ? "Рассрочка и кредит"
        : index === 3
        ? "Бонусная программа"
        : index === 4
        ? "ДМС"
        : ""}
    </h1>
  );
}

export default Price;
