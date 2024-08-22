import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/">Gold</NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/gold/rings">
                <img src={iconImg} alt="" className="icon-ring" />
                Rings
              </NavLink>
            </li>
            <li>
              <NavLink to="/gold/necklaces">
                <img src={necklessIconImg} alt="" className="icon-bracelt" />
                Necklaces
              </NavLink>
            </li>
            <li>
              <NavLink to="/gold/bangles">
                <img src={bangleImg} alt="" className="icon-bracelt" />
                Bangles
              </NavLink>
            </li>
            <li>
              <NavLink to="/gold/earrings">
                <img src={earing_icon} alt="" className="icon-bracelt" />
                Earrings
              </NavLink>
            </li>
            <li>
              <NavLink to="/gold/gold_chains">
                <img src={chainIcon} alt="" className="icon-bracelt" />
                Gold Chains
              </NavLink>
            </li>
            <li>
              <NavLink to="/gold/pendants">
                <img src={pendentIcon} alt="" className="icon-bracelt" />
                Pendants
              </NavLink>
            </li>
            <li>
              <NavLink to="/gold/mangalsutras">
                <img src={mangalIcon} alt="" className="icon-bracelt" />
                Mangalsutras
              </NavLink>
            </li>
            <li>
              <NavLink to="/gold/bracelets">
                <img src={bracletImg} alt="" className="icon-bracelt" />
                Bracelets
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <NavLink to="/">Diamond</NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/diamond/rings">
                <img src={diamongRingIcon} alt="" className="icon-bracelt" />
                Rings
              </NavLink>
            </li>
            <li>
              <NavLink to="/diamond/necklaces">
                <img
                  src={diamongNecklessIcon}
                  alt=""
                  className="icon-bracelt"
                />
                Necklaces
              </NavLink>
            </li>
            <li>
              <NavLink to="/diamond/earrings">
                <img src={diamongEarringIcon} alt="" className="icon-bracelt" />
                Earrings
              </NavLink>
            </li>
            <li>
              <NavLink to="/diamond/pendants">
                <img src={diamongPendentIcon} alt="" className="icon-bracelt" />
                Pendants
              </NavLink>
            </li>
            <li>
              <NavLink to="/diamond/bracelets">
                <img src={diamondBraceltIcon} alt="" className="icon-bracelt" />
                Bracelets
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/wedding-collections">Wedding Collections</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
