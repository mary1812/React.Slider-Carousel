import React, { useState, useEffect } from "react";
import Image from "./Image";
import Description from "./Description";
import data from "../../data";
import styles from "./carousel.css";

function Carousel() {
  const [slider, setSlider] = useState(0);
  const [id, setId] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  const nextSlider = () => {
    // if (slider >= data.length) {
    //   setSlider(0);
    // } else {
    //   setSlider((prevslider) => prevslider + 1);
    // }

    setSlider((slider) => (slider + 1) % data.length )
  };

  const interval = () => 
    setInterval(() => {
      nextSlider();
    }, 2000);
  ;

  useEffect(() => {
    console.log(slider);
    if (isStarted) {
      setId(interval());
    } else {
      return clearInterval(id);
    }
  }, [isStarted]);

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
        <button onClick={prevSlider} className="leftButtonSLider">
          {"<"}
        </button>
        <Image alt="img" src={data[slider].picture} />
        <button onClick={nextSlider} className="rightButtonSLider">
          {">"}
        </button>
        <button onClick={() => setIsStarted(!isStarted)}>START</button>
      </div>
      <Description name={data[slider].name} text={data[slider].text} />
    </div>
  );
}

export default Carousel;
