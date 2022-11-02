import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this
  };

// create onclick method to save things to the database
// refresh map after event is done

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <h1>Welcome to your Next Adventure</h1>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyDZuksUvhreR3xxfSZrKUpJeUYaKroRGW8"}}
          center={{lat:47.596, lng:-122.295}}
          zoom={10}
          onClick={this.handleClick}
        />
          // create a list that has lat lng and info
          // use the list to display markers

          // add a for loop here that fetch info from database
          // and create the markers
      </div>
    )
  }
}

export default Map;
