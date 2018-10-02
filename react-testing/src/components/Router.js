import React from "react";
import "../styles/Navbar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Router = () => (

    <div>
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Books} />
                    <Route exact path="/books" component={Books} />
                    <Route exact path="/books/:id" component={Detail} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>

    </div>





);

export default Router;