import React, { useEffect, useState } from "react";
import slider1 from "../../../Assets/slider1.jpg";
import slider2 from "../../../Assets/slider2.jpg";
import slider3 from "../../../Assets/jewellery_banner3.jpg";
import "./CollectionsBanner.css";

const CollectionsBanner = () => {
  const [slider, setSlider] = useState(0);
  const ImgData = [slider1, slider2, slider3]; // Convert ImgData to an array

  // useEffect to handle automatic sliding
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlider((prevSlider) => (prevSlider + 1) % ImgData.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Clean up the interval on unmount
  }, [ImgData.length]); // Dependency array includes ImgData.length

  const nextSlide = () => {
    setSlider((prevSlider) => (prevSlider + 1) % ImgData.length);
  };

  const prevSlide = () => {
    setSlider((prevSlider) =>
      prevSlider === 0 ? ImgData.length - 1 : prevSlider - 1
    );
  };

  return (
    <div className="slider">
      {ImgData.map((img, i) => (
        <div
          className={`slider-img ${slider === i ? "block" : "hidden"}`}
          key={i}
        >
          <img src={img} alt={`Slider ${slider + 1}`} className="img-sliders" />
          <div className="btn">
            {/* <button onClick={prevSlide}>-</button>
            <button onClick={nextSlide}>+</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionsBanner;
