import React, { Component } from "react";
import Image from "./Image";
import Description from "./Description";
import styles from "./carousel.css";

class Carousel extends Component {
constructor(props) {
  super(props);
  this.state = {
    slideImage: 0
  }
}

  render() {
    return (
      <div className="constructorCarousel">
        <Image
          alt="img"
          src=" https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg"
        />
        <Description />
      </div>
    );
  }
}

export default Carousel;
