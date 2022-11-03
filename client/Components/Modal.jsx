import React, { Component } from 'react';
import { Link, withRouter } from 'react-dom';
import { nanoid } from 'nanoid';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.saveLocation = this.saveLocation.bind(this);
  }

  //this func prevents propogation from clicks on the input field
  ignoreClick(event){
    event.stopPropagation();
  };

  saveLocation(event) {
    this.props.parentCallback();

    let type = document.getElementById(`${this.props.rand}inType`).value;
    let recommendation = document.getElementById(`${this.props.rand}inMessage`).value;
    let recommended_by = document.getElementById(`${this.props.rand}inRec`).value;
    const body = {
      lat: this.props.lat,
      lng: this.props.lng,
      type,
      recommendation,
      recommended_by,
    }
    console.log('body:', body)
    fetch('http://localhost:3000/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
  }



  render() {
    return (
      <div className='modal' onClick={this.ignoreClick}>
        <label htmlFor="type">Type: </label>
        <input type='text' id={`${this.props.rand}inType`} name='type:'></input>
        <label htmlFor="recommendation">Recommendation: </label>
        <input type='text' id={`${this.props.rand}inMessage`} name='recommendation: '></input>
        <label htmlFor="recommendedBy">Recommended by: </label>
        <input type='text' id={`${this.props.rand}inRec`} name='recommended by: '></input>
        <button type='button' className='add' onClick={this.saveLocation}> + Add </button>
      </div>
    )
  }
}

export default Modal;