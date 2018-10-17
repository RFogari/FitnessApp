import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JumbotronLogin from "../Pages/Login/Jumbotron-login";




class Home extends Component {
  login() {
    this.props.auth.login();

    
  }

  componentDidMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
      console.log(userProfile);
      console.log(userProfile.sub);
      localStorage.setItem("user", userProfile.sub);
      //alert(userProfile.sub);
    }
  }


  render() {
    const { isAuthenticated } = this.props.auth;

      

    return (
      <div className="container">
        {
          isAuthenticated() && (
           <div>
            <JumbotronLogin />
            
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
