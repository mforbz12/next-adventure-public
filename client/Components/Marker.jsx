import React, { Component } from 'react';
import Modal from './Modal.jsx';
import DisplayModal from './DisplayModal.jsx';

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
    if(this.state.display && this.props.rec === undefined){
      //then render the modal component that prompts for inputs
      return <Modal
      lat={this.props.lat}
      lng={this.props.lng}
      rec={this.props.rec}
      rand={this.props.rand}
      deleteEl={this.props.deleteEl}
      parentCallback={this.clickButton}/>
    }
    if (this.state.display && this.props.rec) {
      return <DisplayModal
      rec={this.props.rec}
      rec_by={this.props.rec_by}
      type={this.props.type}/>
    }
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