const db = require("../models");

//defining methods for fitnesscontroller



module.exports = {


  

    find: function(req, res) {
        db.Data
            .find( { tokenID:  "auth0|5bb8d30fea4644072b1ae394" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    create: function(req, res) {
        db.Data
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

};