import React from "react";
import img from "../assets/img/info_img.JPG";

const Info = () => {
  return (
    <section id="info">
      <div className="info__inner">
        <h1 className="info__title">introduce👋</h1>
        <div className="info__wrap__left">
          <div className="text">frontend developer</div>
          <div className="img">
            <img src={img} alt="프로필"></img>
          </div>
        </div>
        <div className="info__wrap__right">
          <p className="info__text">
            안녕하세요. 철저한 자기 객관화를 통해 끊임없이 노력하는
            김기율입니다.안녕하세요. 철저한 자기 객관화를 통해 끊임없이 노력하는
            김기율입니다.
          </p>
          <ul className="info__links">
            <li>1992.10.13</li>
            <li>010-5055-2211</li>
            <li>pdf</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Info;
