import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RingData } from "../Categoery/Rings/RingData";
import { ActionButton } from "../../Styles/ActionButton";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SingleProductPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);

  // Find the product by ID
  const product = RingData.find((p) => p.id === parseInt(id));

  // Return early if the product is not found
  if (!product) return <p>Product not found</p>;

  // Event handler for size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <img
          src={product.image}
          alt={product.name}
          className="single-product-image"
        />
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <div
            className="product-price-categoery"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p className="product-price">Price: {product.price}</p>
            <p className="product-price">{product.category}</p>
          </div>

          <p className="product-description">{product.description}</p>
          <div className="product-size-list">
            {product.sizes.map((size, index) => (
              <span
                key={index}
                className={`product-size ${
                  size === selectedSize ? "selected" : ""
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </span>
            ))}
          </div>
          <div className="product-add-to-cart">
            <NavLink to={"/cart"}>
              <ActionButton style={{ fontWeight: "600" }}>
                Add To Cart
              </ActionButton>
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
    </div>
  );
};

export default SingleProductPage;
