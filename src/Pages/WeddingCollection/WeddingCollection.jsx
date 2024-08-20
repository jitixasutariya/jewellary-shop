import React from "react";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";
import CollectionsBanner from "./CollectionsBanner/CollectionsBanner";
import Footer from "../../Componets/Footer/Footer";

const WeddingCollection = () => {
  return (
    <div className="wedding-page">
      <HeaderOne />
      <SecondHeader />
      <HeaderThird />
      <CollectionsBanner />
      <Footer />
    </div>
  );
};

export default WeddingCollection;
