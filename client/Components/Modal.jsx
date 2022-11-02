import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let currClass, currModal;
    console.log(this.props.modalDisplay)
    if (this.props.modalDisplay === true) {
      currClass = '.container.active'
      currModal = '.modal.active'
    }
    if (this.props.modalDisplay === false) {
      currClass = '.container'
      currModal = '.modal.active'
    }
    return (
      <div className={currClass}>
        <div className={currModal}>
          Test
          <button className='close'> + Add</button>
        </div>
      </div>
    )
  }
}

export default Modal