import React from "react";
import pricePhoto1 from "../../../shared/assets/images/price-photo1.png";
import pricePhoto2 from "../../../shared/assets/images/price-photo2.png";
import pricePhoto3 from "../../../shared/assets/images/price-photo3.png";
import pricePhoto4 from "../../../shared/assets/images/price-photo4.png";
function Images() {
  return (
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
  );
}

export default Images;
