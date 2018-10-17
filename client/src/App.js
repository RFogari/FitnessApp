import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Fitness App</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                [
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>,
                  <Button
                    id="buttonID"
                    bsStyle="primary"
                    classname="btn-margin"
                    onClick={this.goTo.bind(this, 'About')}
                    >About</Button>,

                    <Button
                    id="buttonID"
                    bsStyle="primary"
                    classname="btn-margin"
                    onClick={this.goTo.bind(this, 'Contact')}
                    >Contact
                    </Button>
                ]
                

                )
            }
            {
              isAuthenticated() && (
                  [
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>,
                  
                  <Button
                  id="fitnessForm"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'Fitnessform')}>
                  Enter New Records</Button>,

                  <Button
                  id="Data"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'Data')}>
                  
                  Track Activity</Button>
                  ]
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>

                )
            }
          </Navbar.Header>
        </Navbar>
        <div className="container">
          {this.props.children}
          
        </div>
      </div>
    );
  }
}

export default App;
