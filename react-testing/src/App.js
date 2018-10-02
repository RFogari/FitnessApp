import React from "react";
//import Header from "./components/Header";
//import Section from "./components/Section";

import Navbar from "./components/Navbar";
import mongoResults from "./components/mongoResults";
import JumbotronHome from "./components/Jumbotron-home";
import JumbotronAbout from "./components/Jumbotron-about";
import AboutText from "./components/About-text.js";
import JumbotronContact from "./components/Jumbotron-contact";
import JumbotronLogin from "./components/Jumbotron-login";
import JumbotronMyprofile from "./components/Myprofile-main.js";
import Footer from "./components/Footer";

function ifElse() {

  function alpha() {
    return <h1>This is function Alpha</h1>;
    //console.log("This is function Alpha");
  }

  function beta() {
    return <h1>This is function Beta</h1>;
    //console.log("This is function Beta");
  }

  if (1 < 5) {
    console.log("this is function Alpha");
  }
  console.log("this is function Beta");
}


ifElse();

const App = () => (

  <div>
    <Navbar />
    <mongoResults />
    <JumbotronHome />
    <JumbotronAbout />
    <AboutText />
    <JumbotronContact />
    <JumbotronLogin />
    <JumbotronMyprofile />
    <Footer />

  </div>
);

export default App;
