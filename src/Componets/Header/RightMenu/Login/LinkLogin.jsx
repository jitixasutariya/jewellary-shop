import React from "react"; // Importing React to use React components
import { NavLink } from "react-router-dom"; // Importing Link from react-router-dom to handle navigation
import "./LoginPopup.css"; // Importing the CSS file for styling the component

// Functional component that renders a link for signing up
const LinkLogin = () => {
  return (
    <div className="link-login">
      {/* Link component to navigate to the Sign-Up page */}
      <NavLink to="/sign-up" className="sign-up">
        Don't have an account? Please Sign Up
      </NavLink>
    </div>
  );
};

export default LinkLogin; // Exporting the component to be used in other parts of the application
