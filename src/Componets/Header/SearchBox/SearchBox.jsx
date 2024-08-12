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
  // State to manage the mega menu visibility
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  // Toggle function to open/close the mega menu
  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <div className="search-container">
      {/* Microphone icon triggers the mega menu */}
      <FontAwesomeIcon
        icon={faMicrophone}
        className="microphone-icon"
        onClick={toggleMegaMenu}
      />
      {/* Search input field */}
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onClick={toggleMegaMenu}
      />
      {/* Camera icon */}
      <FontAwesomeIcon icon={faCamera} className="camera-icon" />
      {/* Search icon */}
      <FontAwesomeIcon icon={faSearch} className="search-icon" />

      {/* Mega menu that appears when isMegaMenuOpen is true */}
      {isMegaMenuOpen && (
        <div className="mega-menu">
          {/* Content of the Mega Menu */}
          <p>Mega Menu Content</p>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
