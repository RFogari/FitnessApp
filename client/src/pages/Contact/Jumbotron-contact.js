import React from "react";
import "../../Style/style.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const JumbotronContact = () => (
            <div className="jumbotron contact">
                <h1 id="title" className="display-3">Contact</h1>
                <p className="lead standard-text"></p>
                {/* <hr className="my-4">
                </hr> */}

            </div>
);

export default JumbotronContact;