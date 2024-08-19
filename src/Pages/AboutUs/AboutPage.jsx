import React from "react";
import "./AboutPage.css";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";

const AboutPage = () => {
  return (
    <div>
      {/* This is the first header */}
      <HeaderOne />

      {/* This is the second header */}
      <SecondHeader />
      {/* This is the third header */}
      <HeaderThird />
    </div>
  );
};

export default AboutPage;
