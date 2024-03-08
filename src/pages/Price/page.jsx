import { useLocation } from "react-router-dom";
import ButtonRoutes from "./components/detalPrice/ButtonRoutes";
import PriceSortAll from "./components/PriceBetifulSmile";
import PriceReStart from "./components/PriceReStart";
import clsx from "clsx";
import PriceCure from "./components/PriceCure";
import { useState } from "react";
// import Sale from '../../widgets/Sale/Sale'
import Sale from "../../widgets/sale/Sale";
import SaleFiveButton from "./components/detalPrice/SaleFiveButton";

function PricePage() {
  const location = useLocation().search;
  const searchParams = new URLSearchParams(location);
  const tabId = +searchParams.get("tabId");
  const [tabContentIndex, setTabContentIndex] = useState(0);

  return (
    <>
      <section className="price mt-[98px]">
        <div className="container">
          <div className="price__content">
            <center>
              {" "}
              <h1>
                {!tabId
                  ? "Цены"
                  : tabId === 1
                  ? "Акция"
                  : tabId === 2
                  ? "Рассрочка и кредит"
                  : tabId === 3
                  ? "Бонусная программа"
                  : tabId === 4
                  ? "ДМС"
                  : ""}
              </h1>
            </center>
            <ButtonRoutes id={tabId} />
          </div>
          <div className="price__tab--content">
            {tabId === 0 ? (
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
                ) : tabContentIndex == 3 ? (
                  <PriceCure />
                ) : tabContentIndex == 0 ? (
                  <PriceReStart />
                ) : (
                  ""
                )}
              </>
            ) : tabId === 1 ? (
              <SaleFiveButton />
            ) : tabId === 2 ? (
              <Sale />
            ) : tabId === 3 ? (
              "Бонусная программа"
            ) : tabId === 4 ? (
              "ДМС"
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default PricePage;
