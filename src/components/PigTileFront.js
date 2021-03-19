import React, { Component } from "react";

export default class PigTileFront extends Component {


  render() {
    let name = this.props.hog.name.toLowerCase();
    name = name.replace(/\s+/g, '_')
    let pigImage = require(`../hog-imgs/${name}.jpg`)
    
  

    return (
      <div  >
        <h4>{this.props.hog.name}</h4>
        <img src={pigImage} ></img>
      </div>
    );
  }

}
