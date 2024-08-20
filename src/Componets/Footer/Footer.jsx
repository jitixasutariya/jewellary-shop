import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="advanced-footer">
      <div className="footer-top">
        <div className="footer-section">
          <ul>
            <li>
              <a href="/" style={{ color: "black" }}>
                <h4>Home</h4>
              </a>
            </li>
            <li>
              <a href="/about-us" style={{ color: "black" }}>
                <h4>About Us</h4>
              </a>
            </li>
            <li>
              <a href="/blogs" style={{ color: "black" }}>
                <h4>Blogs</h4>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>All Jewellary</h4>
          <ul>
            <li>
              <a href="/">Gold</a>
            </li>
            <li>
              <a href="/">Diamond</a>
            </li>
            <li>
              <a href="/wedding-collections">Wedding Collections</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <a href="/contact-us" style={{ color: "black" }}>
                <h4>Contact</h4>
              </a>
            </li>
          </ul>

          <p>1234 Street Name, City, Country</p>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Newsletter Signup</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; 2024 Jewellery Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
