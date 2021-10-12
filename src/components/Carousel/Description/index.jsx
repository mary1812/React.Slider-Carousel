import React, { Component } from "react";
import data from "../../../data";

class Description extends Component {
  render() {
    const { name, text } = this.props;

    return (
      <div className="descriptionText">
        <h1 className="nameSlider">{name}</h1>
        <p className="textSlider">
          {text}
        </p>
      </div>
    );
  }
}

export default Description;
