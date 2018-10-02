import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const JumbotronHome = () => (
            <div class="jumbotron index">
                <h1 id="title" class="display-3">Welcome to</h1>
                <h1 id="title" class="display-3">Fitness Tracker</h1>
                <p class="lead standard-text">Let us help you on your journey to healthy living</p>
                <hr class="my-4">
                </hr>
                <p class="lead">
                    <a class="btn btn-primary btn-lg standard-text" id="learn-button" href="about.html" role="button">Learn more</a>
                </p>
            </div>
);

export default JumbotronHome;