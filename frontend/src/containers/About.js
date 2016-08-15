import React, { Component } from 'react';
import Header from './Header.js';
import HomeImage from './HomeImage.js';
import '../css/About.css';
import Footer from './Footer.js';
import Profiles from '../utils/aboutText.js';
import { Button, Modal } from 'react-bootstrap';

class About extends Component{
  constructor(props) {
    super(props)
    this.state = {
      showModalNate: false,
      showModalBaba: false,
      showModalCarrow: false
    }
  }


  openModal(name){
    console.log('clicked:', name)
    if (name === 'nate') {
          this.setState({
            showModalNate: true
          });
      } else if (name === 'baba') {
          this.setState({
            showModalBaba: true
          });
      } else {
          this.setState({
            showModalCarrow: true
          });
      }
  }

  closeModal(name){
    console.log('close modal clicked')
    if (name === 'nate') {
          this.setState({
            showModalNate: false
          });
      } else if (name === 'baba') {
          this.setState({
            showModalBaba: false
          });
      } else {
          this.setState({
            showModalCarrow: false
          });
      }
  }

  render(){
    return(
      <div>
        <HomeImage />
        <Header />

        <div className='wrapper'>
          <div className="infoCard">
             <Modal show={this.state.showModalCarrow} onHide={() => this.closeModal('carrow')}>
                <Modal.Header closeButton>
                  <Modal.Title className='title'>Carrow Thibault</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{Profiles.carrowText()}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button bsStyle='primary' onClick={(name) => this.closeModal('carrow')}>Close</Button>
                </Modal.Footer>
              </Modal>
              <div className='aboutContainer1'>
                <img className='carrowPic'/><br></br>
                <Button className='button' bsStyle="danger" onClick={() => this.openModal('carrow')}>
                    About Carrow
                </Button>
              </div>
          </div>

          <div className="infoCard">
              <Modal show={this.state.showModalNate} onHide={() => this.closeModal('nate')}>
                <Modal.Header closeButton>
                  <Modal.Title className='title'>Nate Smith</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{Profiles.nateText()}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button bsStyle='primary' onClick={(name) => this.closeModal('nate')}>Close</Button>
                </Modal.Footer>
              </Modal>
              <div className='aboutContainer1'>
              <img className='natePic'/><br></br>
                <Button className='button' bsStyle="danger" onClick={() => this.openModal('nate')}>
                    About Nate
            </Button>
          </div>

        <div className="wrapper">
        <div className="infoCard">
           <Modal show={this.state.showModalCarrow} onHide={() => this.closeModal('carrow')}>
              <Modal.Header closeButton>
                <Modal.Title className='title'>Carrow Thibault</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{Profiles.carrowText()}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle='primary' onClick={(name) => this.closeModal('carrow')}>Close</Button>
              </Modal.Footer>
            </Modal>
            <div className='aboutContainer1'>
              <img className='carrowPic'/><br></br>
              <Button className='button' bsStyle="danger" onClick={() => this.openModal('carrow')}>
                  About Carrow
              </Button>
            </div>
        </div>

          <div className="infoCard">
            <Modal show={this.state.showModalBaba} onHide={() => this.closeModal('baba')}>
                <Modal.Header closeButton>
                  <Modal.Title className='title'>Babajide Kale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{Profiles.babaText()}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button bsStyle='primary' onClick={(name) => this.closeModal('baba')}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div className='aboutContainer1'>
              <img className='babaPic'/><br></br>
              <Button className='button' bsStyle="danger" onClick={() => this.openModal('baba')}>About Babajide
              </Button>
            </div>
          </div>
        </div>

      <Footer />
    </div>
    )
  }
}

export default About
