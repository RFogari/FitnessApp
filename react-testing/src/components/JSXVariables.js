import React from "react";

const name = "Jesse";
const lettersNumber = "five";
const reactThoughts = "is easier then handlebars"
const nameWithoutVowels = "Jss";

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {lettersNumber} letters</h2>
        <h2>I think React {reactThoughts}</h2>
        <h1>My name without any vowels: {nameWithoutVowels}</h1>
      </div>
    </div>
  </div>
);

export default JSXVariables;
