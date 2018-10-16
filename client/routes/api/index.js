const router = require("express").Router();
const recordRoutes = require("./records");

//fitnessdata routes
router.use("/records", recordRoutes);

module.exports = router;