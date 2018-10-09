const db = require("../models");

//defining methods for fitnesscontroller

module.exports = {

    findAll: function(req, res) {
        db.Data
            .find(req.query)
            .sort({ date:-1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        
    },
    
    findById: function(req, res) {
        db.Data
            .findById(req.params.id)
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