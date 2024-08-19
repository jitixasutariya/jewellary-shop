// src/HomePage.js
import React from "react";
import "./HomePage.css";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";
import HomeBanner from "./HomeBanner/HomeBanner";
import ProductList from "../../Componets/ProductCard/ProductList";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeaderOne />
      <SecondHeader />
      <HeaderThird />
      <HomeBanner />
      <ProductList />
    </div>
  );
};

export default HomePage;
