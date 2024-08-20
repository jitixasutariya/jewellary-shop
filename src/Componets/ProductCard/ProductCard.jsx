import React from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.image} alt={props.name} className="card-img" />
        <div className="card_info">
          <div className="card-details">
            <h3 className="card_title">{props.name}</h3>
            <span className="card_price">{props.price}</span>
          </div>

          <div className="size-details">
            <span className="card_size">{props.size}</span>

            <a href="/#" target="_blank" className="add-to-cart-link">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="add-to-cart-icon"
              />
            </a>
            <a href="/#" target="_blank" className="whislist-link">
              <FontAwesomeIcon icon={faHeart} className="whislist-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
