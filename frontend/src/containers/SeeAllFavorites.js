import React, { Component } from 'react'
import Header from './Header.js'
import HomeImage from './HomeImage.js'
import ViewFavs from './viewFavs.js'
import { Link } from 'react-router'
import Footer from './Footer.js';

class SeeAllFavorites extends Component{


  render(){
    return(
      <div>
      <HomeImage />
        <Header />
        <ViewFavs />
        <Footer />
      </div>
    )
  }
}
export default SeeAllFavorites
