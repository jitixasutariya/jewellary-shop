import React from "react";
import "./SecondHeader.css";
import LogoImg from "../../../Assets/logo.png";
import SearchBox from "../SearchBox/SearchBox";

const SecondHeader = () => {
  return (
    <div className="second-header">
      <div className="left_sidebar">
        <img src={LogoImg} alt="" className="logo-img" />
      </div>
      <div className="middle_sidebar">
        <SearchBox />
      </div>
      <div className="right_sidebar">right Header</div>
    </div>
  );
};

export default SecondHeader;
