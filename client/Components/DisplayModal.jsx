import React, { Component } from 'react';
import { Link, withRouter } from 'react-dom';

class DisplayModal extends Component {
  constructor(props) {
    super(props);
    this.deletePerm = this.deletePerm.bind(this);
  }


  ignoreClick(event){
    event.stopPropagation();
  };

  deletePerm() {
    let randId = this.props.rand;
    console.log('going to delete: ',randId)
    fetch(`/api/delete/${randId}`, {
      method: 'DELETE',
      body: JSON.stringify(randId)
    })

  }

    render() {
      return(
        <div className='displayModal' onClick={this.ignoreClick}>
          <h4>Recommendation:</h4>
          <p>{this.props.rec}</p>
          <h4>Recommended By:</h4>
          <p>{this.props.rec_by}</p>
          <button className='editBtn'>Edit </button>
          <button className='arcBtn'>Archive </button>
          <button className='remBtn' onClick={this.deletePerm}>Remove</button>


        </div>
      )
    }
  }
export default DisplayModal;
