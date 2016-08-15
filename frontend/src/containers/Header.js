import React, { Component } from  'react'
import Welcome from './Welcome.js'
import { Link } from 'react-router'
import ViewFavs from './viewFavs.js'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component{

  render(){
    return(
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Drinks on Us</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><Link to="/About">About</Link></NavItem>
          <NavItem><Link to="/ViewAll">View Favorites</Link></NavItem>
          <NavItem><Link to="/">Search</Link></NavItem>
          <NavItem><Link to='/Login'>Login</Link></NavItem>
          <NavItem>{localStorage.getItem("DISPLAYNAME")}</NavItem>

        </Nav>
      </Navbar>
    )
  }
}
export default Header
