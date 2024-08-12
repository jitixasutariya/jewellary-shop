import React, { useState } from "react";
import "./LoginPopup.css"; // Import CSS for styling
import LinkLogin from "./LinkLogin";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (!email || !password) return;
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <div className="login-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2 style={{ textAlign: "center", fontSize: "45px" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="link-login">
            <LinkLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
