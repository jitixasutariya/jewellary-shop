import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./SignUp.css";

// SignUp component for rendering the sign-up form
const SignUp = ({ onClose }) => {
  const navigate = useNavigate();

  // State to handle form input values
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Function to handle form submission and save data to local storage
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    localStorage.setItem("user", JSON.stringify(input)); // Saves the user input to local storage
    navigate("/login"); // Redirects the user to the login page after sign-up
  };

  return (
    <div className="signup-popup">
      <div className="signup-form">
        {/* Close button to close the signup form */}
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Sign Up</h2>

        {/* Form for user input */}
        <form onSubmit={handleSubmit}>
          {/* Username input field */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-container">
              <FaUser className="icon" />
              <input
                type="text"
                id="username"
                name="username"
                value={input.username}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Email input field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Password input field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                id="password"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
