import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import jwt_decoded from 'jwt-decode';
import setAuthToken from './authToken/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';


import './App.css';

import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Login from './components/Login/login';
import Home from './components/Home/home';

//import 'boostrap/dist/css/boostrap.min.css';


if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decoded(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href ='/login'
  }
}


class App extends Component {
  render() {
    return (

      <Provider store = { store }>
        <Router>
          <div>
            <Navbar />

            <Route exact path="/" component={ Home } />

            <div className="container">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
            </div>

          </div>
        </Router>
      </Provider>
       
    );
  }
}

export default App;
