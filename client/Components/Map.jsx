import React, { Component } from 'react';
import { render } from 'react-dom';


class Map extends Component {
  render() {
    let imgSrc = 'https://www.freeworldmaps.net/printable/worldmap-countries-hd.jpg';
    return (
      <div className ="map">
        <h1 className ="title">Welcome to your Next Adventure</h1>
        <img className ="staticMap" src={imgSrc} alt='world map' />
      </div>
    )
  }
}

export default Map;
