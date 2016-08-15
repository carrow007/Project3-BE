import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js'
import HomeImage from './HomeImage.js'
import { Link } from 'react-router'
import '../css/App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
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
        <Home />

        <Footer />
      </div>
    );
  }
}

export default App;
