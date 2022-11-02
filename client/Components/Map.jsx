import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';
import { nanoid } from 'nanoid';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: []
    }
    this.handleClick = this.handleClick.bind(this);
  };

// create onclick method to save things to the database
// refresh map after event is done
  handleClick(data) {
    //takes lat and lng from map
    let newCoords = {lat: data.lat, lng: data.lng};
    let coords = this.state.coords;
    coords.push(newCoords)
    //stores the coordinates into state
    this.setState({coords: coords});
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <h1>Welcome to your Next Adventure</h1>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyDZuksUvhreR3xxfSZrKUpJeUYaKroRGW8"}}
          center={{lat:47.596, lng:-122.295}}
          zoom={10}
          onClick={this.handleClick}
        >
        {this.state.coords.map((individual) => {
          return <Marker key={nanoid()} lat={individual.lat} lng={individual.lng}/>
        })}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
