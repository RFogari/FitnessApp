const router = require("express").Router();
const fitnessController = require("../../controllers/fitnessController");

//Match based on '/api/data'
router.route("/")
    .get(fitnessController.findAll)
    .post(fitnessController.create)

//match based on user token ID
router
    .route("/:id")
    .get(fitnessController.findByID)
    .put(fitnessController.update);
    
    
module.exports = router;