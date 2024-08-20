// src/HomePage.js
import React from "react";
import "./HomePage.css";
import { HomeProductList } from "./HomeProduct/HomeProductList";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeProduct from "./HomeProduct/HomeProduct";
import MemberShip from "../../Componets/MemberShip/MemberShip";
import Footer from "../../Componets/Footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeaderOne />
      <SecondHeader />
      <HeaderThird />
      <HomeBanner />
      <div className="home-product">
        <div className="latest-product-details">
          <h2>New For You!</h2>
          <p>Our latest releases, just for you!</p>
        </div>
        <hr style={{ border: "2px solid #FFAA33", margin: "30px 100px" }} />
        <div className="home-product-list">
          <HomeProduct {...HomeProductList[0]} />
          <HomeProduct {...HomeProductList[1]} />
          <HomeProduct {...HomeProductList[2]} />
        </div>
        <hr style={{ border: "2px solid #FFAA33", margin: "30px 100px" }} />
      </div>

      <MemberShip />
      <Footer />
    </div>
  );
};

export default HomePage;
