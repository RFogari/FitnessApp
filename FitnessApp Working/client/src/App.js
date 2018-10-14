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
              <a href="/">Fitness App</a>
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
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>,
                  <Button
                    id="aboutMe"
                    bsStyle="primary"
                    classname="btn-margin"
                    onClick={this.goTo.bind(this, 'AboutMe')}
                    >About Me</Button>


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
                  
                  View Records</Button>,

                  <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                  >
                  Log Out
                  </Button>
                  ]
                )
            }
            {
              isAuthenticated() && (
                  /*<Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>,

                <Button
                id="fitnessForm"
                bsStyle="primary"
                classname="btn-margin"
                onClick={this.goTo.bind(this, 'Fitnessform')}>
                Enter New Records</Button>
                */
                  <div></div>

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
