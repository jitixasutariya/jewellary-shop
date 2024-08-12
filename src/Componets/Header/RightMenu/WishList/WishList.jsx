import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./WishList.css";

/**
 * WishList Component
 *
 * This component renders a heart icon along with the text 'WHISLIST'.
 * It is used to display a wishlist icon in the user interface.
 */
const WishList = () => {
  return (
    <div className="wishlist-menu">
      {/* Render the FontAwesome heart icon */}
      <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
      {/* Render the wishlist text */}
      <span className="wishlist-text">WHISLIST</span>
    </div>
  );
};

export default WishList;
