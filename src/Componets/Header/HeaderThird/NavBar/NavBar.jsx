import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconImg from "../../../../Assets/ring_icon.png";
import necklessIconImg from "../../../../Assets/gold_set_icon.jpg";
import bracletImg from "../../../../Assets/bracelet.jpg";
import bangleImg from "../../../../Assets/bangles_icon.jpg";
import earing_icon from "../../../../Assets/earing_icon.jpg";
import chainIcon from "../../../../Assets/chain_icon.jpg";
import pendentIcon from "../../../../Assets/pedant_icon.png";
import mangalIcon from "../../../../Assets/mangalsutra_icon.png";
import diamongRingIcon from "../../../../Assets/diamond-ring.jpg";
import diamongNecklessIcon from "../../../../Assets/diamond-necklace_icon.jpg";
import diamongEarringIcon from "../../../../Assets/earing_icon_diamond.jpg";
import diamongPendentIcon from "../../../../Assets/diamond_pedant_icon.png";
import diamondBraceltIcon from "../../../../Assets/diamond_bracelt_icon.jpg";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li className="dropdown">
          <Link to="/">Gold</Link>
          <ul className="dropdown-menu">
            <li style={{ paddingLeft: "10px" }}>
              <Link to="/gold/rings">
                <img src={iconImg} alt="" className="icon-ring" />
                Rings
              </Link>
            </li>
            <li>
              <Link to="/gold/necklaces">
                <img src={necklessIconImg} alt="" className="icon-bracelt" />
                Necklaces
              </Link>
            </li>
            <li>
              <Link to="/gold/bangles">
                <img src={bangleImg} alt="" className="icon-bracelt" />
                Bangles
              </Link>
            </li>
            <li>
              <Link to="/gold/earrings">
                <img src={earing_icon} alt="" className="icon-bracelt" />
                Earrings
              </Link>
            </li>
            <li>
              <Link to="/gold/gold_chains">
                <img src={chainIcon} alt="" className="icon-bracelt" />
                Gold Chains
              </Link>
            </li>
            <li>
              <Link to="/gold/pendants">
                <img src={pendentIcon} alt="" className="icon-bracelt" />
                Pendants
              </Link>
            </li>
            <li>
              <Link to="/gold/mangalsutras">
                <img src={mangalIcon} alt="" className="icon-bracelt" />
                Mangalsutras
              </Link>
            </li>
            <li>
              <Link to="/gold/bracelets">
                <img src={bracletImg} alt="" className="icon-bracelt" />
                Bracelets
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/">Diamond</Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/diamond/rings">
                <img src={diamongRingIcon} alt="" className="icon-bracelt" />
                Rings
              </Link>
            </li>
            <li>
              <Link to="/diamond/necklaces">
                <img
                  src={diamongNecklessIcon}
                  alt=""
                  className="icon-bracelt"
                />
                Necklaces
              </Link>
            </li>
            <li>
              <Link to="/diamond/earrings">
                <img src={diamongEarringIcon} alt="" className="icon-bracelt" />
                Earrings
              </Link>
            </li>
            <li>
              <Link to="/diamond/pendants">
                <img src={diamongPendentIcon} alt="" className="icon-bracelt" />
                Pendants
              </Link>
            </li>
            <li>
              <Link to="/diamond/bracelets">
                <img src={diamondBraceltIcon} alt="" className="icon-bracelt" />
                Bracelets
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/wedding-collections">Wedding Collections</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
