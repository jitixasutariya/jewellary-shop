import React from "react";
import "./SecondHeader.css";
import LogoImg from "../../../Assets/logo.png";
import SearchBox from "../SearchBox/SearchBox";
import RightMenu from "../RightMenu/RightMenu";
import WishList from "../RightMenu/WishList/WishList";
import Cart from "../RightMenu/Cart/Cart";

/**
 * SecondHeader Component
 *
 * This component represents the second header section of the application.
 * It includes a logo on the left, a search box in the middle, and a right-side menu.
 */
const SecondHeader = () => {
  return (
    <div className="second-header">
      {/* Left Sidebar containing the logo */}
      <div className="left_sidebar">
        <img src={LogoImg} alt="Logo" className="logo-img" />
      </div>

      {/* Middle Sidebar containing the search box */}
      <div className="middle_sidebar">
        <SearchBox />
      </div>

      {/* Right Sidebar containing the right menu */}
      <div className="right_sidebar">
        <RightMenu />
        <WishList />
        <Cart />
      </div>
    </div>
  );
};

export default SecondHeader;
