const db = require('../models');

module.exports = {

    findAll: function(req, params) {
        db.FitnessData
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.FitnessData
            .create(req, body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.FitnessData
            .findbyId({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

    update: function(req, res) {
        db.FitnessData
            .findOneAndUpdate({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => re.json(dbModel))
            .catch(err => res.status(422).json(err));
    }





}