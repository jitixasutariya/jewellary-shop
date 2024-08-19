import React from "react";
import "./ContactUs.css";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";

const ContactUs = () => {
  return (
    <div>
      {/* This is the first header */}
      <HeaderOne />

      {/* This is the second header */}
      <SecondHeader />
      {/* This is the third header */}
      <HeaderThird />
    </div>
  );
};

export default ContactUs;
