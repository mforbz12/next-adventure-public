import React, { Component } from 'react';

class DisplayModal extends Component {
  constructor(props) {
    super(props);
  }


    render() {
      return(
        <div className='displayModal'>
          <h4>Recommendation:</h4>
          {this.props.rec}
          <h4>Recommended By:</h4>
          {this.props.rec_by}
        </div>
      )
    }
  }
export default DisplayModal;
