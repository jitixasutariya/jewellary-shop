import React from "react";
import { useNavigate } from "react-router-dom";
import { TabButton } from "../../../Styles/TabButton";
import "./HomeProduct.css";

const HomeProduct = (props) => {
  const navigate = useNavigate();

  // Handler function to navigate to a category-wise product page
  const handleExploreMore = () => {
    navigate(`/gold/${props.category}`); // Use category prop to navigate
  };

  return (
    <div className="latest-product">
      <div className="latest-product-card">
        <img src={props.image} alt={props.name} className="product-image" />
        <div className="card-content">
          <h3>{props.name}</h3>
          <TabButton onClick={handleExploreMore}>
            <span>Explore More</span>
          </TabButton>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
