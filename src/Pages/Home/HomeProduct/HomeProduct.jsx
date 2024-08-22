import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { TabButton } from "../../../Styles/TabButton";
import "./HomeProduct.css";

const HomeProduct = (props) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler function to navigate to another page
  const handleExploreMore = () => {
    navigate("/gold/rings"); // Replace "/target-page" with the path you want to navigate to
  };

  return (
    <div className="latest-product">
      <div className="latest-product-card">
        <img src={props.image} alt={props.name} className="product-image" />
        <div className="card-content">
          <h3>{props.name}</h3>
          <TabButton onClick={handleExploreMore}>
            {" "}
            {/* Add onClick handler */}
            <span>Explore More</span>
          </TabButton>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
