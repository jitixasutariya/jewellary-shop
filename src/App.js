import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/AboutUs/AboutPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import LoginPopup from "./Componets/Header/RightMenu/Login/LoginPopup";
import SignUp from "./Componets/Header/RightMenu/SignUp/SignUp";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import WeddingCollection from "./Pages/WeddingCollection/WeddingCollection";
import Rings from "./Componets/Categoery/Rings/Rings";
import Product from "./Componets/Product/Product";
import HeaderOne from "./Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "./Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "./Componets/Header/HeaderThird/HeaderThird";
import Cart from "./Componets/Header/RightMenu/Cart/Cart";
import WishList from "./Componets/Header/RightMenu/WishList/WishList";
import MemberShip from "./Componets/MemberShip/MemberShip";
import Footer from "./Componets/Footer/Footer";
import { ThemeProvider } from "styled-components";
import ErrorPage from "./Pages/ErrorPage";
const App = () => {
  const theme = {
    colors: {
      bg: "#fff",
    },
    media: {
      mobile: "786px",
      tab: "998px",
    },
  };
  return (
    <div className="app-header">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeaderOne />
          <SecondHeader />
          <HeaderThird />
          <Routes>
            <Route path="/login" element={<LoginPopup />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/gold/rings" element={<Rings />} />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="/wedding-collections"
              element={<WeddingCollection />}
            />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <MemberShip />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
export default App;
