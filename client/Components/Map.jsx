import React, { Component, useState } from 'react';
import { Link } from 'react-dom';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';
import { nanoid } from 'nanoid';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [],
    }
    this.handleClick = this.handleClick.bind(this);
  };
// create onclick method to save things to the database
// refresh map after event is done

  // openModal() {
  //   this.setState({modalDisplay: true})
  // }

  handleClick(event) {
    //takes lat and lng from map
    let newCoords = {lat: event.lat, lng: event.lng};
    let coords = this.state.coords;
    coords.push(newCoords)
    //stores the coordinates into state
    this.setState({coords: coords});
  }

  componentDidMount() {
    fetch('/api/pins')
      .then(res => res.json())
      .then((pins) => {
        for (const key in pins) {
          let newCoords = ({lat: pins[key].lat, lng: pins[key].lng})
          this.state.coords.push(newCoords)
        }
        let coords = this.state.coords;
        this.setState({coords})
        //console.log(this.state.coords)
        //console.log(this.state.coords[9])
        })
      .catch(err => console.log('Pins.componentDidMount: ERROR: ' + err))
    }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <h1>Welcome to your Next Adventure</h1>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyDZuksUvhreR3xxfSZrKUpJeUYaKroRGW8"}}
          center={{lat:47.596, lng:-122.295}}
          zoom={8}
          onClick={this.handleClick}
        >
        {this.state.coords.map((individual) => {
          return <Marker rand={nanoid()} lat={individual.lat} lng={individual.lng}/>
        })}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
