import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleCardClick = () => {
    // Navigate to the product page, assuming the product has an ID
    navigate(`/product/${props.id}`);
  };

  return (
    <div className="cards">
      <div className="card" role="button" tabIndex={0}>
        <img
          src={props.image}
          alt={props.name}
          className="card-img"
          onClick={handleCardClick}
        />
        <div className="card_info">
          <div className="card-details">
            <h3 className="card_title">{props.name}</h3>
            <span className="card_price">{props.price}</span>
          </div>

          <div className="size-details">
            <span className="card_size">
              {Array.isArray(props.sizes) ? (
                props.sizes.map((size, index) => (
                  <span
                    key={index}
                    className={`size-item ${
                      size === selectedSize ? "selected" : ""
                    }`}
                    onClick={() => handleSizeClick(size)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => handleSizeClick(size)}
                    aria-label={`Select size ${size}`}
                  >
                    {size}
                  </span>
                ))
              ) : (
                <span>{props.sizes}</span> // Handle other cases or types as needed
              )}
            </span>

            <a
              href="/#"
              target="_blank"
              className="add-to-cart-link"
              aria-label="Add to cart"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="add-to-cart-icon"
              />
            </a>
            <a
              href="/#"
              target="_blank"
              className="whislist-link"
              aria-label="Add to wishlist"
            >
              <FontAwesomeIcon icon={faHeart} className="whislist-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
