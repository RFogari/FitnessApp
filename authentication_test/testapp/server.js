const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./app/routes');

const app = express();
const PORT = process.env.PORT || 3001;

//Configure body parser for AJAX requests.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//static assets
app.use(express.static('client/build'));
//add routes for API and view
app.use(routes);

//MongoDB connection 
mongoose.connect(
    process.env.MONGODB_URI || '"mongodb://localhost/fitnesssecurity'
);


//API Server start
app.listen(PORT, function() {
    console.log('API Server listening on port ${PORT}.')
});