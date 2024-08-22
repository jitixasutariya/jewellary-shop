import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Spa } from "@mui/icons-material";

// Pass the RingData as a prop or import it in the parent component
const ProductCard = ({ products, category }) => {
  // State to keep track of selected size for each product
  const [selectedSizes, setSelectedSizes] = useState({});

  const navigate = useNavigate();

  // Handle size click for a specific product
  const handleSizeClick = (id, size) => {
    setSelectedSizes((prevState) => ({
      ...prevState,
      [id]: size,
    }));
  };

  // Navigate to product details page
  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Filter the products based on the category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="cards">
      {filteredProducts.map((product) => (
        <div className="card" key={product.id} role="button" tabIndex={0}>
          <img
            src={product.image}
            alt={product.name}
            className="card-img"
            onClick={() => handleCardClick(product.id)}
          />
          <div className="card_info">
            <div className="card-details">
              <h3 className="card_title">{product.name}</h3>
              <span className="card_price">{product.price}</span>
            </div>
            <div className="weight-details">
              <span className="product-weight"></span>
            </div>
            <div className="size-details">
              <span className="card_size">
                {Array.isArray(product.sizes) ? (
                  product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className={`size-item ${
                        size === selectedSizes[product.id] ? "selected" : ""
                      }`}
                      onClick={() => handleSizeClick(product.id, size)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select size ${size}`}
                    >
                      {size}
                    </span>
                  ))
                ) : (
                  <span>{product.sizes}</span>
                )}
              </span>
              <NavLink
                to={"/cart"}
                className="add-to-cart-link"
                aria-label="Add to cart"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="add-to-cart-icon"
                />
              </NavLink>
              <NavLink
                to={"/wishlist"}
                className="whislist-link"
                aria-label="Add to wishlist"
              >
                <FontAwesomeIcon icon={faHeart} className="whislist-icon" />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
