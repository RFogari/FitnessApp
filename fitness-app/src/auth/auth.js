import auth0 from 'auth0-js';

import history from './history/history'

export default class Auth {
  //Auth0 credentials

  auth0 = new auth0.webAuth({
    domain: 'rcb2018.auth0.com',
    clientID: 'VMmnjHQabl8pif5fWEaXmvk4bPLaOB0x',
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' :
    audience: 'https://rcb2018.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login = () => {
    this.auth0.authorize();
  }

  //parse result after authentication from URL hash

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

//set user details in localStorage

  setSession = (authResult) => {
    //Set expiration time for  access token
    let expiresAt = JSON.stringify((authResult.expiresIn = 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    //navigate to home route
    history.replace('/home');
  }

//logout and remove user details from localStorage

logout = () => {
  //remove access token and id token from local localStorage

  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');

  //navigate to home route
  history.replace('/home');
}

}
