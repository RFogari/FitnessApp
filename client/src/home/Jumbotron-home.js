import React from "react";
import "../Style/style.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const JumbotronHome = () => (
            <div className="jumbotron index">
                <h1 id="title" className="display-3">Welcome to</h1>
                <h1 id="title" className="display-3">Fitness Tracker</h1>
                <p className="lead standard-text">Let us help you on your journey to healthy living</p>
                <hr className="my-4">
                </hr>
                <p className="lead">
                    <a className="btn btn-primary btn-lg standard-text" id="learn-button" href="about" role="button">Learn more</a>
                </p>
            </div>
);

export default JumbotronHome;