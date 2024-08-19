import React from "react";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";
import CollectionsBanner from "./CollectionsBanner/CollectionsBanner";

const WeddingCollection = () => {
  return (
    <div className="wedding-page">
      <HeaderOne />
      <SecondHeader />
      <HeaderThird />
      <CollectionsBanner />
    </div>
  );
};

export default WeddingCollection;
