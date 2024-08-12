import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' instead of 'react-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import ForgotPassword from "./Componets/Header/RightMenu/Login/ForgotPassword/ForgotPassword";
import SignUp from "./Componets/Header/RightMenu/SignUp/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

// Create the root element using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app with the new API
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  </Router>
);
