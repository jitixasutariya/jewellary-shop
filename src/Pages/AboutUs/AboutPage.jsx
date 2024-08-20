import React from "react";
import "./AboutPage.css";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";
import AboutBanner from "./AboutBanner";
import MemberShip from "../../Componets/MemberShip/MemberShip";
import Footer from "../../Componets/Footer/Footer";
const AboutPage = () => {
  return (
    <div>
      {/* This is the first header */}
      <HeaderOne />

      {/* This is the second header */}
      <SecondHeader />
      {/* This is the third header */}
      <HeaderThird />
      <AboutBanner />
      <MemberShip />
      <Footer />
    </div>
  );
};

export default AboutPage;
