import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/AboutUs/AboutPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import LoginPopup from "../Componets/Header/RightMenu/Login/LoginPopup";
import SignUp from "../Componets/Header/RightMenu/SignUp/SignUp";
import ProtectedRoutes from "../Routes/ProtectedRoutes";
import WeddingCollection from "../Pages/WeddingCollection/WeddingCollection";
import Rings from "../Componets/Categoery/Rings/Rings";
import Earrings from "../Componets/Categoery/Earrings/Earrings";
import Product from "../Componets/Product/Product";
import Cart from "../Componets/Header/RightMenu/Cart/Cart";
import WishList from "../Componets/Header/RightMenu/WishList/WishList";
import ErrorPage from "../Pages/ErrorPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPopup />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/" element={<ProtectedRoutes />}>
      <Route index element={<HomePage />} />
    </Route>
    <Route path="/about-us" element={<AboutPage />} />
    <Route path="/gold/rings" element={<Rings />} />
    <Route path="/gold/earrings" element={<Earrings />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/wedding-collections" element={<WeddingCollection />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<WishList />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
