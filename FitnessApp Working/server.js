


const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;



//body-parser to handle form submission
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//express static will server public folder
app.use(express.static("client/build"));

//Routes for both API and view
app.use(routes);

//Mongo DB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdatadb")

//API server
app.listen(PORT, function() {
    console.log(` ==> API server listening on PORT ${PORT}!`)
});
