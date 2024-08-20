import React from "react";
import "./Rings.css";
import { RingData } from "../Rings/RingData";
import HeaderOne from "../../Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Header/HeaderThird/HeaderThird";
import ProductCard from "../../ProductCard/ProductCard";
import MemberShip from "../../MemberShip/MemberShip";
import Footer from "../../Footer/Footer";

const Rings = () => {
  return (
    <div className="gold-ring-page">
      <HeaderOne />
      <SecondHeader />
      <HeaderThird />
      <div className="product-card-list">
        <h2 className="title">Gold Rings </h2>
        <div className="product-card">
          <ProductCard {...RingData[0]} />
          <ProductCard {...RingData[1]} />
          <ProductCard {...RingData[2]} />
          <ProductCard {...RingData[3]} />
          <ProductCard {...RingData[4]} />
          <ProductCard {...RingData[5]} />
          <ProductCard {...RingData[6]} />
          <ProductCard {...RingData[7]} />
        </div>
      </div>
      <MemberShip />
      <Footer />
    </div>
  );
};

export default Rings;
