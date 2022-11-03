import React, { Component } from 'react';
import Modal from './Modal.jsx';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
    this.clickButton = this.clickButton.bind(this);
  }


  //this function changes the display state back and forth on button click
  clickButton(event) {
    this.setState({display: !this.state.display})

  }

  //if the display state is set to true, then it will render the modal component
  changeDisplay() {
    //if display is true and message = ''
    if(this.state.display){
      //then render the modal component that prompts for inputs
      return <Modal lat={this.props.lat} lng={this.props.lng} rand={this.props.rand} parentCallback={this.clickButton}/>
    }
    //if display is true and message != ''
      //then render the modal component that displays stored data
  }

  render() {
    return (
      <div>
        <button className="marker" onClick={this.clickButton}/>
        {this.changeDisplay()}
      </div>
    )
  }
}

export default Marker;