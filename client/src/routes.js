import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Fitnessform from './Pages/FitnessForm/Fitnessform';
import Data from "./Pages/Data/datadisplay";
import AboutMe from "./Pages/AboutMe/aboutme";
import About from "./Pages/About/About";
import Jumbotronhome from "./Home/Jumbotron-home";



const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/FitnessForm" render={(props) => <Fitnessform auth={auth} {...props} />} />
          <Route path="/Data" render={(props) => <Data auth={auth} {...props} />} />
          <Route path="/AboutMe" render={(props) => <AboutMe {...props} />} />
          <Route path="/About" render={(props) => <About {...props} />} />
          
          <Switch>



          </Switch>
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/"/>
            ) : (
              <Profile auth={auth} {...props} />

            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>


        </div>
      </Router>
  );
}
