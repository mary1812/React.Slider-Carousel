import React, { useState, useEffect } from "react";
import Image from "./Image";
import Description from "./Description";
import data from "../../data";
import styles from "./carousel.css";

function Carousel() {
  const [slider, setSlider] = useState(0);

  const nextSlider = () => {
    if (slider === 2) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };

  const prevSlider = () => {
    if (slider === 0) {
      setSlider(2);
    } else {
      setSlider(slider - 1);
    }
  };

  return (
    <div className="container">
   <div className="constructorCarousel">
      <button onClick = {prevSlider} className="leftButtonSLider">{"<"}</button>
      <Image alt="img" src={data[slider].picture} />
      <button onClick={nextSlider} className="rightButtonSLider">
        {">"}
      </button>
    </div>
    <Description name ={data[slider].name} text = {data[slider].text} />
    </div>
  );
}

export default Carousel;
