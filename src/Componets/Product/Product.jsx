import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RingData } from "../Categoery/Rings/RingData";
import { ActionButton } from "../../Styles/ActionButton";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const colorMap = {
  Rose: "#b76e79",
  White: "#e3e3de",
  "White and Rose": "linear-gradient(45deg, #f5f5f5, #b76e79)",
  Yellow: "#ffd700",
  "Yellow and Rose": "linear-gradient(45deg, #ffd700, #b76e79)",
  "Yellow and White": "linear-gradient(45deg, #ffd700, #f5f5f5)",
  "Yellow White and Rose": "linear-gradient(45deg, #ffd700, #f5f5f5, #b76e79)",
};

const SingleProductPage = () => {
  const { id } = useParams();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState("");
  // Initialize state for quantity
  const [quantity, setQuantity] = useState(1);

  // Handle change in input field
  const handleChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure quantity is at least 1
    setQuantity(value);
  };

  // Handle increment
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle decrement
  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const product = RingData.find((p) => p.id === parseInt(id));

  const handleSizeClick = (id, size) => {
    setSelectedSizes((prevState) => ({
      ...prevState,
      [id]: size,
    }));
  };

  const handleSelectWeight = (event) => {
    setSelectedWeight(event.target.value);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-container">
      <div className="product-header">
        <img
          src={product.images}
          srcSet={`${product.images} 1x, ${product.images} 2x`}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={product.name}
          className="single-product-image"
        />
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-info">
            <p className="product-price">Price: {product.price}</p>
            <p className="product-category">{product.category}</p>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-midpart">
            <div className="select-container">
              <label htmlFor="selectBox">Weight</label>
              <select
                id="selectBox"
                value={selectedWeight}
                onChange={handleSelectWeight}
              >
                <option value="">Select Weight</option>
                {product.weight?.map((weight, index) => (
                  <option key={index} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>
            </div>
            <div className="qty-container">
              <label htmlFor="qty">QTY</label>
              <button onClick={handleDecrement}>-</button>
              <input
                type="number"
                value={quantity}
                onChange={handleChange}
                min="1" // Optional, to prevent negative values
              />
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>

          <div className="product-sizes">
            {Array.isArray(product.sizes) ? (
              product.sizes.map((size, index) => (
                <span
                  key={index}
                  className={`product-size ${
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
          </div>
          <div className="product-colors">
            {Array.isArray(product.metal_colors) &&
              product.metal_colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-circle ${
                    color === selectedColor ? "selected-color" : ""
                  }`}
                  onClick={() => handleColorClick(color)}
                  style={{
                    background: colorMap[color] || "#fff",
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select color ${color}`}
                />
              ))}
          </div>
          <div className="product-actions">
            <NavLink to={"/cart"}>
              <ActionButton className="add-to-cart-btn">
                Add To Cart
              </ActionButton>
            </NavLink>
            <NavLink to={"/wishlist"} aria-label="Add to wishlist">
              <FontAwesomeIcon
                icon={faHeart}
                className="wishlist-icon-product"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
