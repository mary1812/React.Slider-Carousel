import React, { useState, useEffect } from "react";
import Image from "./Image";
import Description from "./Description";
import data from "../../data";
import styles from "./carousel.css";

function Carousel() {
  const [slider, setSlider] = useState(0);

  const changeSlider = () => {
    if (slider === 2) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };

  return (
    <div className="constructorCarousel">
      <button className="leftButtonSLider">{"<"}</button>
      <Image alt="img" src={data[slider].picture} />
      <button onClick={changeSlider} className="rightButtonSLider">
        {">"}
      </button>

      <Description />
    </div>
  );
}

export default Carousel;
