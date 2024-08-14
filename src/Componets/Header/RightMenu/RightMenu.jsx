import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./RightMenu.css";
import LoginPopup from "./Login/LoginPopup";
import SignUp from "./SignUp/SignUp";

const RightMenu = () => {
  // Retrieve the user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  // State to manage the visibility of the menu, login popup, sign-up popup, and login status
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect hook to check if the user is logged in by retrieving the login status from local storage
  useEffect(() => {
    const loginStatus = localStorage.getItem("loginUser");
    setIsLoggedIn(!!loginStatus);
  }, []);

  // Handlers to show and hide the account menu on mouse enter and leave events
  const handleMouseEnter = () => setIsMenuVisible(true);
  const handleMouseLeave = () => setIsMenuVisible(false);

  // Handlers to display the login and sign-up popups
  const handleLoginClick = () => {
    setIsMenuVisible(false);
    setIsLoginPopupVisible(true);
  };

  const handleSignUpClick = () => {
    setIsMenuVisible(false);
    setIsSignUpVisible(true);
  };

  // Handler to log the user out by removing login information from local storage
  const handleLogoutClick = () => {
    localStorage.removeItem("loginUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  // Handler to close the login or sign-up popups
  const handleClosePopup = () => {
    setIsLoginPopupVisible(false);
    setIsSignUpVisible(false);
  };

  return (
    <div
      className="right-menu-header"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="account-menu">
        {/* FontAwesome icon and text for the account section */}
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="account-text">ACCOUNT</span>
      </div>

      {/* Display the mega menu when the menu is visible and neither login nor sign-up popups are active */}
      {isMenuVisible && !isLoginPopupVisible && !isSignUpVisible && (
        <div className="mega-menu">
          <h1 style={{ textAlign: "center" }}>My Account</h1>
          {/* Display the user's name if available, otherwise show 'Guest' */}
          {user ? user.name : "Guest"}
          <p
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            {/* Show a welcome message if logged in, otherwise prompt to log in */}
            {isLoggedIn ? "Welcome Back!" : "Login to access your account"}
          </p>
          <div className="menu-buttons">
            {/* Conditionally render login, sign-up, or logout buttons based on login status */}
            {!isLoggedIn ? (
              <>
                <button className="menu-button" onClick={handleLoginClick}>
                  Login
                </button>
                <button className="menu-button" onClick={handleSignUpClick}>
                  SignUp
                </button>
              </>
            ) : (
              <button className="menu-button" onClick={handleLogoutClick}>
                Logout
              </button>
            )}
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

      {/* Render the login or sign-up popups when they are visible */}
      {isLoginPopupVisible && <LoginPopup onClose={handleClosePopup} />}
      {isSignUpVisible && <SignUp onClose={handleClosePopup} />}
    </div>
  );
};

export default RightMenu;
