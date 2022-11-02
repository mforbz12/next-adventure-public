import React, { Component } from 'react';


class Marker extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('load', alert('bazinga'));
 }

  render() {
    return (
      <button className="marker" style={{
        position: "absolute",
        background: 'grey',
        borderRadius: '100%',
        padding: '10px 10px',
        border: 'none'
      }}>
      </button>
    )
  }
}

export default Marker;