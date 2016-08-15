import React, { Component } from 'react'
import Header from './Header.js'
import Firebaseauth from '../utils/auth.js'
import HomeImage from './HomeImage.js'
import { Link } from 'react-router'
import Favorite from './Favorites.js'
import { Button, Nav, Navbar, NavItem} from 'react-bootstrap';
import '../css/logins.css'


class Login extends Component {
constructor(props){
  super(props);
  this.state = {
    email: '',
    password: '',
    userName:'',
    displayName: '',
    userid:''
  }
}


handleEmailChange(event) {
  event.preventDefault();
  console.log('e.t.v:', event.target.value);
  this.setState({
    email: event.target.value
  })
}
handlePasswordChange(event) {
  event.preventDefault();
  console.log('e.t.v:', event.target.value);
  this.setState({
    password: event.target.value,
  })
}
handleUserNameChange(event){
  event.preventDefault();
  this.setState({
    userName: event.target.value,
  })
}

handleSignUp(event){
  event.preventDefault();
  console.log(this.state.email,this.state.password);
  Firebaseauth.SignUp(this.state.email,this.state.password,this.state.userName)
  Firebaseauth.sendEmailVerification()
}

handleSignIn(event){
  event.preventDefault();
  Firebaseauth.SignIn(this.state.email,this.state.password).then((res)=>{
    console.log("RESPONSED:",res);
    this.setState({
      userid: res.uid,
      displayName:res.displayName
    })
  })
}

handleSignOut(event){
  event.preventDefault();
  Firebaseauth.SignOut()
  this.setState({
    displayName:""
  })

}

handleUpdate(event){
  event.preventDefault();

    Firebaseauth.Update(this.state.userName).then((res)=>{
      console.log(res);
    })
}

render(){
  localStorage.setItem("USERID",this.state.userid)
  localStorage.setItem("DISPLAYNAME", this.state.displayName)
  console.log("userID", this.state.userid);
  let userId = this.state.userid;
    return(
      <div>
        <HomeImage />
        <Header dname={this.state.displayName} />

        <div className='flex'>
        <form className="login" onSubmit={(event) => this.handleSignIn(event)}>
          <input className="tfield" type="email" placeholder="Email" onChange={(event)=>this.handleEmailChange(event)}/>
          <input className="tfield" type="password" placeholder="Password" onChange={(event)=> this.handlePasswordChange(event)}/>
          <Link to="/">  <Button bsStyle='primary' type="submit" onClick={(event)=> this.handleSignIn(event)}>LogIn</Button></Link>
        </form>

        <form className="login" onSubmit={(event) => this.handleSignUp(event)}>
          <input className="tfield" type="email" placeholder="Email" onChange={(event)=>this.handleEmailChange(event)}/>
          <input className="tfield" type="password" placeholder="Password" onChange={(event)=> this.handlePasswordChange(event)}/>
          <input className="tfield" type="text" placeholder="DisplayName" onChange={(event)=>this.handleUserNameChange(event)}/>
          <Button bsStyle='primary' type="submit" onClick={(event)=> this.handleSignUp(event)}>SignUp</Button>
        </form>

        <form className="login" onSubmit={(event) => this.handleUpdate(event)}>
          <input className="tfield" type="text" placeholder="DisplayName" onChange={(event)=>this.handleUserNameChange(event)}/>
          <Button bsStyle='primary' type="submit" onClick={(event)=> this.handleUpdate(event)}>Update Profile</Button>
        </form>

        <Button bsStyle='primary' className="signout login" type="submit" onClick={(event)=> this.handleSignOut(event)}>Sign Out
        </Button>

        </div>

      </div>
    )
  }
}

export default Login;
