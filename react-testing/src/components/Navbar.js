import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (

  <div class="topnav" id="myTopnav">
    <a href="index.html" class="active navbar-brand">
      <h5 >Fitness Tracker</h5>
    </a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
    <a href="login.html">Login</a>
    <a href="myprofile.html">MyProfile</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>

  //<nav className="navbar" style={{backgroundColor: 'green', justifyContent: 'flex-end'}}>

  //<a href="/">Welcome</a>
  //</nav>
);

export default Navbar;