import React from "react";
import { ActionButton } from "../../../Styles/ActionButton";
import "./HomeBanner.css"; // Import the CSS file

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="banner-content">
        <h1>Welcome to Our Website</h1>
        <p>Your description goes here. Make it catchy!</p>
        <ActionButton style={{ border: "none" }}>Learn More</ActionButton>
      </div>
    </div>
  );
};

export default HomeBanner;
