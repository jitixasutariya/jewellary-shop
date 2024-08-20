import React from "react";
import "./ContactUs.css";
import HeaderOne from "../../Componets/Header/HeaderOne/HeaderOne";
import SecondHeader from "../../Componets/Header/SecondHeader/SecondHeader";
import HeaderThird from "../../Componets/Header/HeaderThird/HeaderThird";
import ContactForm from "../../Componets/ContactForm/ContactForm";
import Map from "../../Componets/ContactForm/Map";
import Footer from "../../Componets/Footer/Footer";

const ContactUs = () => {
  return (
    <div>
      {/* This is the first header */}
      <HeaderOne />

      {/* This is the second header */}
      <SecondHeader />
      {/* This is the third header */}
      <HeaderThird />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
};

export default ContactUs;
