import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

/**
 * Cart Component
 *
 * This component displays a shopping cart icon and a text label "Cart".
 * It uses FontAwesome for the icon and includes CSS for styling.
 *
 * @returns {JSX.Element} The rendered Cart component.
 */
const Cart = () => {
  return (
    <div className="cart-menu">
      {/* FontAwesome cart icon */}
      <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
      {/* Text label for the cart */}
      <span className="cart-text">Cart</span>
    </div>
  );
};

export default Cart;
