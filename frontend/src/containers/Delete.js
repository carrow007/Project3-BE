import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../css/Delete.css';
import Firebase from '../utils/database.js';

class Delete extends Component {

  constructor(props){
    super(props);
  }

  handleClick(e){
    const drink = this.props.fireId
    Firebase.delete(drink,localStorage.getItem("USERID")).then((res) => {
      console.log(res);
      console.log("Deleted!");

    });
  }

    render(){
    return(
      <div className='del'>
         <Button className='button' bsStyle='danger' onClick={(event)=>this.handleClick(event)}>Delete</Button>
      </div>
    )
  }

}

export default Delete
