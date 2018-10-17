import React, { Component } from "react";
import "../../Style/style.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

class JumbotronLogin extends Component {
    render(){
    return (
            <div className="jumbotron index login">
                <h1 id="title" className="display-3">Welcome to</h1>
                <h1 id="title" className="display-3">Fitness Tracker</h1>
                <p className="lead standard-text">Enter new records or track your activity. </p>
                <hr className="my-4">
                </hr>
                <p className="lead">
                    {/* <a className="btn btn-primary btn-lg standard-text" id="learn-button" href="about" role="button">Learn more</a> */}
                </p>
            </div>
    )}};

export default JumbotronLogin;