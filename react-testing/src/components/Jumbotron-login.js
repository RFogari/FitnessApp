import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const JumbotronLogin = () => (

    <div class="jumbotron login">
        <h1 id="title" class="display-3">Please Sign Up</h1>
        <br></br>
        <h1 id="title" class="display-3">or Login</h1>
        <p class="lead standard-text"></p>
        <p class="lead">
            <a class="btn btn-primary btn-lg standard-text" id="learn-button" href="#" role="button">Learn more</a>
      
        </p>
    </div>
);

export default JumbotronLogin;