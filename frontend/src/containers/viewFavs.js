import React,{ Component } from 'react';
import Delete from './Delete.js';
import Firebase from '../utils/database.js';
import '../css/viewFavs.css';
import { Button, Modal } from 'react-bootstrap';

class ViewFavs extends Component{
  constructor(props){
    super(props);
    this.state = {
      response: [],
      id: [],
      showModal: false
    }
  }

  openModal(){
    console.log('show:', this.state.showModal)
    this.setState({
      showModal: true
    });
  }

  closeModal(){
    console.log('close modal clicked')
    this.setState({
      showModal: false
    });
  }

  componentDidMount() {
    Firebase.viewFavs(localStorage.getItem("USERID")).then((res) => {
    // console.log('res from db:', res);
      const fireId = Object.keys(res);
      // console.log('fireId:', fireId);

      const drinkArr = [];
      fireId.forEach((id, idx) => {
        drinkArr.push(res[id]);
      })
      // console.log('DA:', drinkArr);
      this.setState({
        response: drinkArr,
        id: fireId
      })
    })
  }

  renderFavDrinks(item,i) {
    // console.log('v.f. item:', item);
    // console.log('isRem:', this.state.response[i][2]);
    const ingredStr = item[1].ingredients.join(', ');
      if (item[2].isRemoved === false) {
        return(
          <div className='drinkDiv' key={i}>
            <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
              <Modal.Header closeButton>
                <Modal.Title>Demonstration</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe className="iframVid"
                  src={this.state.response[i][0].fullVidUrl}
                  width='500'
                  height='400'
                  frameBorder='0'
                  allowFullScreen>
                </iframe>
              </Modal.Body>
            </Modal>

            <ul className="favUl">
              <li className="favLi"><img className='pic' src={item[5].image}></img></li>
              <li className="favLi">Name: {item[3].name}</li>
              <li className="favLi">Instructions: {item[4].instructions}</li>
              <li className="favLi">Ingredients: {ingredStr}</li>
            </ul>
            <div className='container'>
              <Button className='button' bsStyle="primary" onClick={() => this.openModal()}>
                Watch Video
              </Button>
              <Delete className="favDelete" fireId={this.state.id[i]} isRemoved={this.setRemoved} />
            </div>
          </div>
        )
      }
    }

  render(){
    return(
        <div>
          {this.state.response.map((item,i)=> this.renderFavDrinks(item,i))}
        </div>
    )
  }
}
export default ViewFavs
