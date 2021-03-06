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
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Chart2 from "./Chart/Chart2";




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
          <Route path="/Contact" render={(props) => <Contact {...props} />} />
          <Route path="/About" render={(props) => <About {...props} />} />
          <Route path="/Chart" render={(props) => <Chart2 {...props} />} />
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
