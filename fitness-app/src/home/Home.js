import React, { Component } from 'react';
import App from './App';

class Home extends Component {
    //calls login method in authentication service

    login = () => {

      this.props.auth.login();
    }

    //calls logout method in authentication service

    logout = () => {
      this.props.auth.logout();
    }
}

render() {
  // calls the isAuthenticated method from authentication serivice

  const { isAuthenticated } = this.props.auth;

  return (

    <div>
    

  )
}
