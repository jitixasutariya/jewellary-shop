import React from "react";
import "./HomeBanner.css"; // Import the CSS file

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="banner-content">
        <h1>Welcome to Our Website</h1>
        <p>Your description goes here. Make it catchy!</p>
        <button className="banner-button">Learn More</button>
      </div>
    </div>
  );
};

export default HomeBanner;
