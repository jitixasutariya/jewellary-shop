// src/SearchBox.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMicrophone,
  faCamera,
} from "@fortawesome/free-solid-svg-icons"; // Import the new icon

import "./SearchBox.css"; // Import the CSS file for styling

const SearchBox = () => {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faMicrophone} className="microphone-icon" />{" "}
      {/* New icon */}
      <input type="text" className="search-input" placeholder="Search..." />
      <FontAwesomeIcon icon={faCamera} className="camera-icon" />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default SearchBox;
