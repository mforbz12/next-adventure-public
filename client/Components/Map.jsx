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
    this.deleteMarker = this.deleteMarker.bind(this);
    this.filterResults = this.filterResults.bind(this);
  };

  //creates and stores state once a marker is clicked
  handleClick(event) {
    //takes lat and lng from map
    let rand = nanoid();
    let newCoords = {lat: event.lat, lng: event.lng, rand: rand};
    let coords = this.state.coords;
    coords.push(newCoords)
    //stores the coordinates into state
    this.setState({coords: coords});
  }

  //will remove a marker that doesn't have stored data when clicks "cancel"
  deleteMarker() {
    let newState = [...this.state.coords]
    //console.log(newState)
    // for (let i = 0; i < newState.length; i++) {
    //   if (newState[i].rand === num) {
    //     console.log(newState[i]);
    newState.pop()
    this.setState({coords: newState})
    }

  //receives information from the database that will then render stored markers on page
  componentDidMount() {
    fetch('/api/pins')
      .then(res => res.json())
      .then((pins) => {
        for (const key in pins) {
          //need to pull all data (rec by and type if you want to be able to display it on display modal)
          let newCoords = ({
            lat: pins[key].lat,
            lng: pins[key].lng,
            rec: pins[key].recommendation,
            rec_by: pins[key].recommended_by,
            type: pins[key].type,
            rand: pins[key].rand
          })
          this.state.coords.push(newCoords)
        }
        let coords = this.state.coords;
        this.setState({coords})
        //console.log(this.state.coords)
        //console.log(this.state.coords[9])
        })
      .catch(err => console.log('Pins.componentDidMount: ERROR: ' + err))
  }

  filterResults(event) {
    let filterBy = document.getElementById('searchSelection').value;
    let filterWord = document.getElementById('searchbar').value;


  }


  render() {
    return (
      <div style={{ height: '78vh', width: '100%' }}>
        <h1>Welcome to your Next Adventure</h1>
        <div className='filter'>
          <label name=''>Filter By:</label>
          <select id='searchSelection'>
            <option>All</option>
            <option>Type</option>
            <option>Recommended By</option>
            <option>Keyword</option>
          </select>
          <input type="text" id="searchbar" size="20"></input>
          <button id='explore' onClick={this.filterResults}>Explore</button>
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyDZuksUvhreR3xxfSZrKUpJeUYaKroRGW8"}}
          center={{lat:47.596, lng:-122.295}}
          zoom={8}
          onClick={this.handleClick}
        >
        {this.state.coords.map((individual) => {
          return <Marker
          rand={individual.rand}
          lat={individual.lat}
          rec={individual.rec}
          rec_by={individual.rec_by}
          type={individual.type}
          lng={individual.lng}
          deleteEl={this.deleteMarker}
          deleteDB={this.findAndDelete}
          />
        })}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
