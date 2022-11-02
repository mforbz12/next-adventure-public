import React, { Component } from 'react';
import Modal from './Modal.jsx';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
    this.clickButton = this.clickButton.bind(this);
  }

//   componentDidMount() {
//     //window.addEventListener('load', alert('bazinga'));
//  };
  clickButton(event) {
    console.log('click on marker')
    this.setState({display: this.state.display == 'none' ? 'block' : 'none'})
    // this.state.display = !this.state.display
    // event.stopPropagation();
  }

  render() {
    return (
      <div>
        <button className="marker" onClick={this.clickButton}>
        </button>
        <Modal display={this.state.display}/>
      </div>
    )
  }
}

export default Marker;