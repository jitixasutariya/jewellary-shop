import React from "react";
import { Link } from "react-router-dom";
import "./LoginPopup.css";

const LinkLogin = () => {
  return (
    <div className="link-login">
      <Link to="/sign-up" className="sign-up">
        Dont't have account please ! SignUp
      </Link>
    </div>
  );
};

export default LinkLogin;
