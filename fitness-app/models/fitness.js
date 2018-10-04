const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({

    id_token: { type: String, required: true},
    username: { type: String, required: true},
    activity: { type: String, requeired: true},
    note: String,
    date: { type: Date, default: Date.now }

});

const FitnessData = mongoose.model("FitnessData", fitnessSchema);

model.exports = FitnessData;