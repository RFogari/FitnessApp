const router = require('express').Router();
const fitnessDataController = require('../../controllers/fitnessDataController');

router.route('/')
    .get(fitnessDataController.findAll)
    .post(fitnessDataController.create);



router
    .route("/:id")
    .get(fitnessDataController.findAll)
    .put(fitnessDataController.update)
    .delete(fitnessDataController.remove);

    module.exports = router;
