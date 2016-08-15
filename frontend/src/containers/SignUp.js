import React, { Component } from 'react'
import Header from './Header.js'
class SignUp extends Component {

render(){
    return(
      <div>
      <Header />
      <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" placeholder="Email"/>{' '}
          <input type="text" placeholder="Password"/>{' '}
          <button type="submit">SignUp</button>
      </form>
      </div>
    )
  }
}
export default SignUp;
