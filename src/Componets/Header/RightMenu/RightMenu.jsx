import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./RightMenu.css";

// Functional component for the RightMenu
const RightMenu = () => {
  // State to track the visibility of the mega menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to show the menu when the mouse enters the menu area
  const handleMouseEnter = () => setIsMenuVisible(true);

  // Function to hide the menu when the mouse leaves the menu area
  const handleMouseLeave = () => setIsMenuVisible(false);

  return (
    // Container div for the right menu with event handlers for mouse enter/leave
    <div
      className="right-menu-header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Account menu icon and text */}
      <div className="account-menu">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="account-text">Account</span>
      </div>

      {/* Conditional rendering of the mega menu when isMenuVisible is true */}
      {isMenuVisible && (
        <div className="mega-menu">
          {/* Header for the mega menu */}
          <h1 style={{ textAlign: "center" }}>My Account</h1>

          {/* Subheader prompting login */}
          <p
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            Login to access your account
          </p>

          {/* Buttons for Login and SignUp */}
          <div className="menu-buttons">
            <button className="menu-button">Login</button>
            <button className="menu-button">SignUp</button>
          </div>

          {/* Contact Us link */}
          <p
            style={{
              textAlign: "center",
              paddingTop: "20px",
              fontWeight: "500",
            }}
          >
            Click here to CONTACT US
          </p>
        </div>
      )}
    </div>
  );
};

export default RightMenu;
