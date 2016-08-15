import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import App from './containers/App.js';
// import SignUp from './containers/SignUp.js'
import About from './containers/About.js'
import PickByBase from './containers/pickByBase.js'
import SearchDrink from './containers/SearchDrink.js'
import SeeAllFavorites from './containers/SeeAllFavorites.js'
import Login from './containers/logins.js'


import './index.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Search" component={SearchDrink} />
        <Route path="/ByBase" component={PickByBase} />
        <Route path="/ViewAll" component={SeeAllFavorites} />
        <Route path="/Login" component={Login} />

    </Router>
  ),
  document.getElementById('root')
);
