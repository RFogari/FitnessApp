const router = require("express").Router();
const fitnessController = require("../../controllers/fitnessController");

//match based on user token ID
router
    .route("/:id")
    .get(fitnessController.findByID)
    .put(fitnessController.update)
    .post(fitnessController.create);
    
module.exports = router;