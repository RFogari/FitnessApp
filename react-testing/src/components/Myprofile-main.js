import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const JumbotronMyprofile = () => (

    <div class="jumbotron myprofile">
        <h1 class="standard-text">#Profile Name</h1>

        <br></br>
        <br></br>

        <div id="profile-pic">
            <br></br>
            <br></br>
            <h3>
                #Profile Picture
            </h3>
        </div>

        <br></br>

        <h4 class="standard-text">
            #Home Town
        </h4>

        <br></br>

        <h4 class="standard-text">
            #Occupation
        </h4>

        <br></br>

        <h4 class="standard-text">
            #Education
        </h4>

        <br></br>

        <h4 class="standard-text">
            #My Goals
        </h4>

        <br></br>
        <br></br>

        <div id="chart">

            <h2 class="standard-text">
                #Profile Fitness Chart
            </h2>

            <canvas id="lineChart" height="40">
            </canvas>

        </div>
        <br></br>
        <br></br>
        <h2 class="standard-text">
            #Profile Calendar
        </h2>
        <br></br>

        <div id="calendar">

        </div>
        <script src="../logic.js">
        </script>
    </div>

);

export default JumbotronMyprofile;