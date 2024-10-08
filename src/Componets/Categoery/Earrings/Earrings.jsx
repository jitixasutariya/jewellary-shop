import React from "react";
import "../Rings/Rings.css";
import ProductCard from "../../ProductCard/ProductCard";
// import { EarringsData } from "../../Categoery/Earrings/EarringsData"; // Make sure you have EarringsData
import { RingData } from "../../Categoery/Rings/RingData";

const Earrings = () => {
  return (
    <div className="earing-ring-page">
      <h2 className="title">Gold Earrings</h2>
      <div className="product-card-list">
        <ProductCard products={RingData} category="Earrings" />
      </div>
    </div>
  );
};

export default Earrings;
