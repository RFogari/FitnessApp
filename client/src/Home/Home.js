import React, { Component } from 'react';
import JumbotronLogin from "../Pages/Login/Jumbotron-login";
import JumbotronHome from "./Jumbotron-home";




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
             <div>
               <JumbotronHome />
               </div>
            )
        }
      </div>
    );
  }
}

export default Home;
