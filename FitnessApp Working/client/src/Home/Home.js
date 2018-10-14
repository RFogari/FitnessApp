import React, { Component } from 'react';
import { Link } from 'react-router-dom';




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
              <h1>Welcome To Fitness App</h1>

              <h2> To Enter New Records Please click the following</h2>
              <h2>To View Your Records, Please Click the Following</h2>           
                  
              

              <h1> to add new records click the following link <Link to="FitnessForm">Form</Link></h1>
              <h1> to view new records click the following link <Link to="Data">Form</Link></h1>
              <h1> to view new records click the following link <Link to="Dataform2">Form</Link></h1>
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
