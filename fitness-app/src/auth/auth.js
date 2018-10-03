import auth0 from 'auth0-js';
import history from '../history/history'


export default class Auth {
  //Auth0 credentials

  auth0 = new auth0.webAuth({
    domain: 'rcb2018.auth0.com',
    clientID: 'VMmnjHQabl8pif5fWEaXmvk4bPLaOB0x',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login = () => {
    this.auth0.authorize();
  }
}


export default class Auth {

constructor() {
  this.login = this.login.bind(this);
  this.logout = this.logout.bind(this);
  this.handleAuthentication = this.handleAuthentication.bind(this);
  this.isAuthenticated = this.isAuthenticated.bind(this);
}

handleAuthentication() {
  this.auth0.parseHash((err, authResult) => {
    if(authResult && authResult.accessToken && authResult.idToken) {
      this.setSession(authResult);
      history.replace('/home');
    } else if (err) {
      history.replace('/home');
      console.log(err);
    }
  });
}


setSession(authResult) {
  //Sets expiration time for Access Token

  let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);

  //navigates to home route
  history.replace('/home');
}


logout() {
  //Remove Access Token and ID Token from local storage.

  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');

  //navigate to home route
  
  history.replace('/home');
}

isAuthenticated() {
  //validates if current time is past the Access Token's expiration time.

  let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}

}