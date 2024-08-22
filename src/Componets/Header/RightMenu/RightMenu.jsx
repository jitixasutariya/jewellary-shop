import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./RightMenu.css";
import LoginPopup from "./Login/LoginPopup";
import SignUp from "./SignUp/SignUp";
import styled from "styled-components";
import { ActionButton } from "../../../Styles/ActionButton";

const RightMenu = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginUser");
    setIsLoggedIn(!!loginStatus);
    if (loginStatus) {
      setIsLoginPopupVisible(false); // Close the login popup when the user is logged in
    }
  }, [isLoggedIn]);

  const handleMouseEnter = () => setIsMenuVisible(true);
  const handleMouseLeave = () => setIsMenuVisible(false);

  const handleLoginClick = () => {
    setIsMenuVisible(false);
    setIsLoginPopupVisible(true);
  };

  const handleSignUpClick = () => {
    setIsMenuVisible(false);
    setIsSignUpVisible(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("loginUser");
    setIsLoggedIn(false);
    navigate("/");
  };

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
      <AccountMenu />

      {isMenuVisible && !isLoginPopupVisible && !isSignUpVisible && (
        <div className="mega-menu">
          <h1 style={{ textAlign: "center" }}>My Account</h1>
          {user ? user.name : "Guest"}
          <p
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            {isLoggedIn ? "Welcome Back!" : "Login to access your account"}
          </p>
          <div className="menu-buttons">
            {!isLoggedIn ? (
              <>
                <ActionButton onClick={handleLoginClick}>Login</ActionButton>
                <ActionButton onClick={handleSignUpClick}>SignUp</ActionButton>
              </>
            ) : (
              <ActionButton onClick={handleLogoutClick}>Logout</ActionButton>
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

      {isLoginPopupVisible && <LoginPopup onClose={handleClosePopup} />}
      {isSignUpVisible && <SignUp onClose={handleClosePopup} />}
    </div>
  );
};

const AccountMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;

    .user-icon {
      font-size: 2rem;
      transition: color 0.3s ease;
    }

    .user-text {
      font-size: 1.4rem;
      font-weight: 500;
      position: relative;
      transition: color 0.3s ease;
    }

    &:hover .user-icon,
    &:hover .user-text {
      color: rgb(255, 134, 0);
    }
  }
`;

const AccountMenu = () => {
  return (
    <AccountMenuIcon className="account-menu">
      <NavLink to={"/"} className="nav-link">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <span className="user-text">ACCOUNT</span>
      </NavLink>
    </AccountMenuIcon>
  );
};

export default RightMenu;
