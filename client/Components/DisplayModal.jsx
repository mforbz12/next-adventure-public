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
          {this.props.rec}
          <h4>Recommended By:</h4>
          {this.props.rec_by}
          <button onClick={this.deletePerm}>Remove</button>
          <button>Archive </button>
          <button>Edit </button>
        </div>
      )
    }
  }
export default DisplayModal;
