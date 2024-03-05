import React, { useState } from "react";
import "./Social.scss";
// import header2Class from "../../images/header-class.svg";
// import header2Insta from "../../images/header-insta.svg";
// import header2Facebook from "../../images/header-fasebook.svg";
// import header2Vk from "../../images/header-vk.svg";
// import header2You from "../../images/header-you.svg";
import user from "../../images/uset-social.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { LiaOdnoklassnikiSquare } from "react-icons/lia";
import like from "../../images/like-svg.svg";
import post1 from "../../images/like-post.png";
import post2 from "../../images/like-post1.png";
import post3 from "../../images/like-post2.png";
import post4 from "../../images/like-post3.png";
import SoicalDetal from "./SoicalDetal";
// import post2 from "../../images/like-post1.png";

function Social() {
  const dataObj = [
    { img: post2, count: 40 },
    { img: post2, count: 40 },
    { img: post2, count: 40 },
    { img: post2, count: 40 },
    { img: post2, count: 40 },
    { img: post1, count: 125 },
    { img: post3, count: 49 },
    { img: post4, count: 32 },
    { img: post4, count: 32 },
  ];
  return (
    <section className="social__section">
      <div className="container">
        <div className="social__block1">
          <div className="social__block1-title">
            <h1>Мы в социальных сетях</h1>
            <p>
              Подписывайтесь на наши аккаунты, следите за выгодными
              предложениями и задавайте вопросы. Мы всегда рады новым
              знакомствам. Наш хэштэг <span>#названиеклиники</span>
            </p>
            <div className="social__block">
              <div className="social__block-child mt-14 flex justify-between gap-2">
                <div className="block-child-svg flex items-center gap-4">
                  <div className="block-child-left">
                    <AiOutlineInstagram color="#fff" fontSize={55} />
                  </div>
                  <div className="flex-col">
                    <p>
                      <a href="https://www.instagram.com/motion_web">
                        Instagram
                      </a>
                    </p>
                    <p className="flex ">
                      <img src={user} alt="" /> <span>4 560</span>
                    </p>
                  </div>
                </div>
                <div className="block-child-svg flex items-center gap-4">
                  <div className="block-child-left">
                    <SlSocialVkontakte color="#fff" fontSize={55} />
                  </div>
                  <div className="flex-col">
                    <p>вконтакте</p>
                    <p className="flex ">
                      <img src={user} alt="" /> <span>4 560</span>
                    </p>
                  </div>
                </div>
                <div className="block-child-svg flex items-center gap-4">
                  <div className="block-child-left">
                    <RiFacebookBoxLine color="#fff" fontSize={55} />
                  </div>
                  <div className="flex-col">
                    <p>Facebook</p>
                    <p className="flex ">
                      <img src={user} alt="" /> <span>4 560</span>
                    </p>
                  </div>
                </div>
                <div className="block-child-svg flex items-center gap-4">
                  <div className="block-child-left">
                    <CiYoutube color="#fff" fontSize={55} />
                  </div>
                  <div className="flex-col">
                    <p>Youtube</p>
                    <p className="flex ">
                      <img src={user} alt="" /> <span>4560</span>
                    </p>
                  </div>
                </div>
                <div className="block-child-svg flex items-center gap-4">
                  <div className="block-child-left">
                    <LiaOdnoklassnikiSquare color="#fff" fontSize={55} />
                  </div>
                  <div className="flex-col">
                    <p>Одноклассники</p>
                    <p className="flex ">
                      <img src={user} alt="" /> <span>4 560</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dfdf">
          <div className="social__block2  flex">
            {dataObj.map((el, ind) => (
              <SoicalDetal like={like} ind={ind} el={el} key={ind} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
