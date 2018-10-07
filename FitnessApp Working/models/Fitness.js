var mongoose = require("mongoose");

//reference for Schema constructor
var Schema = mongoose.Schema;

//using Schema constructor to creater new FitnessSchema object
var FitnessSchema = new Schema({

    tokenID: {
        type: String,
        required: true,
    },
    
    activity: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    notes: {
        type: String,
        required: false,
    }


});

//Create model from Schema using mongoose's model method.
var Data = mongoose.model("Data", FitnessSchema);

//export Fitness Data model
module.exports = Data;