import React, { Component } from "react";

export default class PigTileBack extends Component {


  render() {
    return (
      <div>
        <h4>{this.props.hog.name}</h4>
        <h4>Specialty: {this.props.hog.specialty}</h4>
        <h4>{this.props.hog.greased ? 'Is greased' : 'Is not greased'}</h4>
        <h4>Weight: {this.props.hog.weight}</h4>
        <h4>Top Medal: {this.props.hog["highest medal achieved"]}</h4>
      </div>
    );
  }

}
