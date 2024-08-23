import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ products, category }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigate(`/product/${id}`);
    }
  };

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="cards">
      {filteredProducts.map((product) => (
        <div
          className="card"
          key={product.id}
          role="button"
          tabIndex={0}
          onClick={() => handleCardClick(product.id)}
          onKeyDown={(event) => handleKeyDown(event, product.id)}
        >
          <img src={product.images} alt={product.name} className="card-img" />
          <div className="card_info">
            <div className="card-details">
              <h3 className="card_title">{product.name}</h3>
              <span className="card_price">{product.price}</span>
            </div>

            <div className="card-link">
              <NavLink
                to="/cart"
                className="add-to-cart-link"
                aria-label={`Add ${product.name} to cart`}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="add-to-cart-icon"
                />
              </NavLink>
              <NavLink
                to="/wishlist"
                className="wishlist-link"
                aria-label={`Add ${product.name} to wishlist`}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="wishlist-icon-list"
                />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
