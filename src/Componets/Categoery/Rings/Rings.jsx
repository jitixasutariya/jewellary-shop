import React from "react";
import "./Rings.css";
import { RingData } from "../Rings/RingData";
import ProductCard from "../../ProductCard/ProductCard";

const Rings = () => {
  return (
    <div className="gold-ring-page">
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
    </div>
  );
};

export default Rings;
