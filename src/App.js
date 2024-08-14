import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPopup from "./Componets/Header/RightMenu/Login/LoginPopup";
import SignUp from "./Componets/Header/RightMenu/SignUp/SignUp";
import ProtectedRoutes from "./Services/ProtectedRoutes";
const App = () => {
  return (
    <div className="app-header">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPopup />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
