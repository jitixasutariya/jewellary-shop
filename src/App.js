import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HeaderOne from "./Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "./Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "./Componets/Header/HeaderThird/HeaderThird";
import MemberShip from "./Componets/MemberShip/MemberShip";
import Footer from "./Componets/Footer/Footer";
import AppRoutes from "./Routes/AppRoutes";

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
          <AppRoutes />
          <MemberShip />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
