const router = require("express").Router();
const fitnessdataroutes = require("./fitnessdata");

//fitnessdata routes
router.use("/fitnessdata", fitnessdataroutes);

module.exports = router;