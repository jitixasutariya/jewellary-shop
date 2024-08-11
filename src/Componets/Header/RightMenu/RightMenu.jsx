import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./RightMenu.css";

const RightMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMouseEnter = () => setIsMenuVisible(true);
  const handleMouseLeave = () => setIsMenuVisible(false);

  return (
    <div
      className="right-menu-header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="account-menu">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="account-text">Account</span>
      </div>
      {isMenuVisible && (
        <div className="mega-menu">
          <h1 style={{ textAlign: "center" }}>My Account</h1>
          <p
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            Login to access your account
          </p>
          <div className="menu-buttons">
            <button className="menu-button">Login</button>
            <button className="menu-button">SignUp</button>
          </div>
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
