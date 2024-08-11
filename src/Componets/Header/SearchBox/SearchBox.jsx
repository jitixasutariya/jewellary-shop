// src/SearchBox.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMicrophone,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css"; // Import the CSS file for styling

const SearchBox = () => {
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <div className="search-container">
      <FontAwesomeIcon
        icon={faMicrophone}
        className="microphone-icon"
        onClick={toggleMegaMenu}
      />
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onClick={toggleMegaMenu}
      />
      <FontAwesomeIcon icon={faCamera} className="camera-icon" />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />

      {isMegaMenuOpen && (
        <div className="mega-menu">
          {/* Your Mega Menu content goes here */}
          <p>Mega Menu Content</p>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
