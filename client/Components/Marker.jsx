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



  //will either prompt for input or display stored data based on state
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
      type={this.props.type}
      rand={this.props.rand}
      parentCallback={this.clickButton}
      />
    }
  }

  render() {
    let newColor;
    if (this.props.type === 'Food') {
      newColor = 'blue'
    } else if (this.props.type === 'Outdoor Activity') {
      newColor = 'green'
    } else if (this.props.type === 'Accommodation') {
      newColor = 'red'
    } else if (this.props.type === 'Landmarks') {
      newColor = 'yellow'
    } else if (this.props.type === 'Tourist Attraction') {
      newColor = 'purple'
    } else {
      newColor = 'dark gray'
    }
    return (
      <div>
        <button style={{backgroundColor: newColor}} className='marker' onClick={this.clickButton}/>
        {this.changeDisplay()}
      </div>
    )
  }
}

export default Marker;