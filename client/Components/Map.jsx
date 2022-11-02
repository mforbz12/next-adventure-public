import React, { Component } from 'react';
import { render } from 'react-dom';



class Map extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit() {
    console.log("Hey!")
  };

  render() {
    let imgSrc = 'https://www.freeworldmaps.net/printable/worldmap-countries-hd.jpg';
    return (
      <div className ="map">
        <h1 className ="title">Welcome to your Next Adventure</h1>
        <button className="add" onClick={this.handleSubmit}>Add New Adventure</button>
        <img className ="staticMap" src={imgSrc} alt='world map' />
      </div>
    )
  }
}

export default Map;
