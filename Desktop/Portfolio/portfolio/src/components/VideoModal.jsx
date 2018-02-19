import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    zIndex                : '4',
    transform             : 'translate(-50%, -50%)',
  }
};
 
class VideoModal extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    //this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
//   afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     this.subtitle.style.color = '#f00';
//   }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

 // <iframe width="560" height="315" src="https://www.youtube.com/embed/3lZ2l3lYVOc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
 //    onAfterOpen={this.afterOpenModal}
 
  render() {
    const {title, embeddingCode} = this.props
    return (
      <div>
        <button className="modal-overlay" onClick={this.openModal}></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <button onClick={this.closeModal}>close</button>
        <h2>{title}</h2>
        {embeddingCode}
        </Modal>
      </div>
    );
  }
}
 
export default withRouter(VideoModal)
