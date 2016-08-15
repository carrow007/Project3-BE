import React, { Component } from 'react'
import SearchDrink from './SearchDrink.js'
import MakeOwn from './MakeOwn.js'
import { Link } from 'react-router'


class Home extends Component{


  render(){
    return(
      <div>
        <SearchDrink />
      </div>
    )
  }
}
export default Home
