import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import HomeImage from './HomeImage.js';
import { Link } from 'react-router';
import MakeOwn from './MakeOwn.js';
import '../css/App.css';

class PickByBase extends Component {
    render(){
    return(
      <div>
      <HomeImage />
        <Header />
        <div className="navButtons">
          <div className="selector">
            <Link className="baseLink" to="/ByBase" className="liqour">
              Search By Base
            </Link>
          </div>
          <div className="selector">
            <Link className="viewAllLink" to="/" className="viewAllFavorites">
              Search By Drink
            </Link>
          </div>
        </div>
        <MakeOwn />
        <Footer />
      </div>
    )
  }

}

export default PickByBase
