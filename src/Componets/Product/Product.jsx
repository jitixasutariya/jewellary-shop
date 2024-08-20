import React from "react";
import "./Product.css"; // Import a CSS file for styling
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";

const Product = () => {
  return (
    <div className="product-page">
      <HeaderOne />
      <SecondHeader />
      <HeaderThird />
    </div>
  );
};

export default Product;
