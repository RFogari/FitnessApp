import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dataForm from "../Pages/FitnessForm/Fitnesform";

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              
            <div>
              
              <h4>
                You are logged in! You can now view your{' '}
                <Link to="profile">profile area</Link>
                .
              </h4>

              <h1>Hello World</h1>
              <h1> to add new records click the following link <Link to="dataForm">Form</Link></h1>
              </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
