import React from "react";
import "./HomeProduct.css";

const HomeProduct = (props) => {
  return (
    <div className="latest-product">
      <div className="latest-product-card">
        <img src={props.image} alt={props.name} className="product-image" />
        <div className="card-content">
          <h3>{props.name}</h3>
          <button className="explore-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
