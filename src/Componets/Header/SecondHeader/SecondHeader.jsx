import React from "react";
import "./SecondHeader.css";
import LogoImg from "../../../Assets/logo.png";
import SearchBox from "../SearchBox/SearchBox";
import RightMenu from "../RightMenu/RightMenu";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CartMenu = () => {
  return (
    <Cart className="cart-menu">
      <NavLink to={"/cart"} className="nav-link">
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        <span className="cart-text">Cart</span>
      </NavLink>
    </Cart>
  );
};

const Cart = styled.div`
  /* Base styles for the cart menu on larger screens */
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;

    .cart-icon {
      font-size: 2rem; /* Adjust size as needed */
      transition: color 0.3s ease; /* Smooth transition for color change */
    }

    .cart-text {
      font-size: 1.4rem; /* Set font size for the text */
      font-weight: 500; /* Set font weight for the text */
      position: relative; /* Required for positioning the pseudo-element */
      transition: color 0.3s ease; /* Smooth transition for color change */
    }

    &:hover {
      .cart-icon,
      .cart-text {
        color: rgb(255, 134, 0); /* Change this to your desired hover color */
      }
    }
  }
`;
const WishList = styled.div`
  /* Base styles for the cart menu on larger screens */
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;

    .wishlist-icon {
      font-size: 2rem; /* Adjust size as needed */
      transition: color 0.3s ease; /* Smooth transition for color change */
    }

    .wishlist-text {
      font-size: 1.4rem; /* Set font size for the text */
      font-weight: 500; /* Set font weight for the text */
      position: relative; /* Required for positioning the pseudo-element */
      transition: color 0.3s ease; /* Smooth transition for color change */
    }
    &:hover .wishlist-icon,
    &:hover .wishlist-text {
      color: rgb(255, 134, 0); /* Change icon and text color on hover */
    }
  }
`;
const WishListMenu = () => {
  return (
    <WishList className="wishlist-menu">
      <NavLink to={"/wishlist"} className="nav-link">
        {/* Render the FontAwesome heart icon */}
        <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
        {/* Render the wishlist text */}
        <span className="wishlist-text">WHISLIST</span>
      </NavLink>
    </WishList>
  );
};

const SecondHeader = () => {
  return (
    <div className="second-header">
      {/* Left Sidebar containing the logo */}
      <div className="left_sidebar">
        <NavLink to={"/"}>
          <img src={LogoImg} alt="Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* Middle Sidebar containing the search box */}
      <div className="middle_sidebar">
        <SearchBox />
      </div>

      {/* Right Sidebar containing the right menu */}
      <div className="right_sidebar">
        <RightMenu />
        <WishListMenu />
        <CartMenu />
      </div>
    </div>
  );
};

export default SecondHeader;
