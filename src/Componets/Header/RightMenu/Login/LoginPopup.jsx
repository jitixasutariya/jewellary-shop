import React, { useState } from "react"; // Import necessary libraries and hooks
import "./LoginPopup.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook from react-router-dom for navigation
import LinkLogin from "./LinkLogin"; // Import a custom component for handling additional login links
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons for the email and password fields

const LoginPopup = ({ onClose }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook for programmatic navigation
  const [input, setInput] = useState({
    email: "",
    password: "",
  }); // useState hook to manage email and password input fields

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    const loginUser = JSON.parse(localStorage.getItem("user")); // Retrieve the stored user information from localStorage

    // Validate the entered email and password against the stored user data
    if (
      loginUser &&
      input.email === loginUser.email &&
      input.password === loginUser.password
    ) {
      localStorage.setItem("loginUser", JSON.stringify(true)); // Store login status in localStorage as a string
      navigate("/"); // Navigate to the homepage upon successful login
    } else {
      alert("Wrong Email or Password"); // Show an alert if the email or password is incorrect
    }
  };

  return (
    <div className="login-popup">
      {" "}
      {/* Popup container */}
      <div className="popup-content">
        {" "}
        {/* Popup content container */}
        <button className="close-button" onClick={onClose}>
          {" "}
          {/* Close button */}×
        </button>
        <h2 style={{ textAlign: "center", fontSize: "45px" }}>Login</h2>{" "}
        {/* Title */}
        <form onSubmit={handleLogin}>
          {" "}
          {/* Form submission */}
          <div className="form-group">
            <label htmlFor="email">Email</label> {/* Email label */}
            <div className="input-container">
              {" "}
              {/* Container for the email input and icon */}
              <FaEnvelope className="icon" /> {/* Email icon */}
              <input
                type="email"
                name="email"
                value={input.email} // Email input field
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                } // Handle input change
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label> {/* Password label */}
            <div className="input-container">
              {" "}
              {/* Container for the password input and icon */}
              <FaLock className="icon" /> {/* Password icon */}
              <input
                type="password"
                name="password"
                value={input.password} // Password input field
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                } // Handle input change
                required
              />
            </div>
          </div>
          <div className="button-container">
            {" "}
            {/* Container for the login button */}
            <button type="submit" className="login-button">
              {" "}
              {/* Login button */}
              Login
            </button>
          </div>
          <div className="link-login">
            {" "}
            {/* Container for additional login links */}
            <LinkLogin /> {/* Custom component for additional login links */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup; // Export the component as the default export
