import React from "react";
import "./Rings.css";
import ProductCard from "../../ProductCard/ProductCard";
import { RingData } from "../../Categoery/Rings/RingData";

const Rings = () => {
  return (
    <div className="gold-ring-page">
      <h2 className="title">Gold Rings</h2>
      <div className="product-card-list">
        <ProductCard products={RingData} category="Ring" />
      </div>
    </div>
  );
};

export default Rings;
