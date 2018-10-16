const router = require("express").Router();
const fitnessController = require("../../controllers/fitnessController");

//Match based on '/api/data'
router.route("/")
    .get(fitnessController.find)
    .post(fitnessController.create)

    
    
module.exports = router;