import React, { useState, useEffect } from "react";
import Image from "./Image";
import Description from "./Description";
import data from "../../data";
import styles from "./carousel.css";

function Carousel() {
  const [slider, setSlider] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const nextSlider = () => {
    if (slider >= 2) {
      setSlider(0);
    } else {
      setSlider((prevslider) => prevslider + 1);
    }
  };

  useEffect(() => {
    let antiloop = slider;
    
    const interval = () =>
      setInterval(() => {
        if (antiloop >= 2) {
          antiloop = 0;
          setSlider(0);
        } else {
          antiloop++;
          setSlider((prevslider) => prevslider + 1);
        }
      }, 2000);
    if (isStarted) {
      interval();
    } else {
      return clearInterval(interval);
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
