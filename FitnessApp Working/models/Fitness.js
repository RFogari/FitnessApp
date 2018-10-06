var mongoose = require("mongoose");

//reference for Schema constructor
var Schema = mongoose.Schema;

//using Schema constructor to creater new FitnessSchema object
var FitnessSchema = new Schema({

    tokenID: {
        type: String,
        required: true,
    },

    username: {
        type: String,
    },

    activity: {
        type: String,
        required: true,
    },

    activityMeasure: {
        type: String,
        required: true,
    },

    day: {
        type: String,
        required: true,
    },

    notes: {
        type: String,
        required: true,
    }


});

//Create model from Schema using mongoose's model method.
var Data = mongoose.model("Data", FitnessSchema);

//export Fitness Data model
module.exports = Data;