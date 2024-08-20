// src/HomePage.js
import React from "react";
import "./HomePage.css";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";
import HomeBanner from "./HomeBanner/HomeBanner";
import Footer from "../../Componets/Footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeaderOne />
      <SecondHeader />
      <HeaderThird />
      <HomeBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
