import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);

  }

  // updateModal() {
  //   console.log("modal update")
  //   if(this.props.display){
  //     this.state.display = 'block'
  //   } else {
  //     this.state.display = 'none'
  //   }
  // }

  //this func prevents propogation from clicks on the input field
  ignoreClick(event){
    event.stopPropagation();
  };

  saveLocation() {
    let type = document.getElementById('inType').value;
    let message = document.getElementById('inMessage').value;
    let recommended_by = document.getElementById('inRec').value;
    const body = {
      type,
      message,
      recommended_by
    }
    console.log('body:', body)
    // fetch('/api/marker', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/JSON'
    //   },
    //   body: JSON.stringify(body)
    // })
    // .then(resp => resp.json())
    // .catch(err => console.log('SaveLocation fetch /api/marker: ERROR: ', err));
  }



  render() {
    return (
      <div className='modal' style={{display: this.props.display}} onClick={this.ignoreClick}>
        <label htmlFor="type">Type: </label>
        <input type='text' id='inType' name='type:'></input>
        <label htmlFor="recommendation">Recommendation: </label>
        <input type='text' id='inMessage' name='recommendation: '></input>
        <label htmlFor="recommendedBy">Recommended by: </label>
        <input type='text' id='inRec' name='recommended by: '></input>
        <button type='button' className='add' onClick={this.saveLocation}> + Add </button>
      </div>
    )
  }
}

export default Modal;