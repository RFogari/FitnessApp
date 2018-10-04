const router = require('express').Router();
const fitnessRoutes = require('./fitnessApi');

router.use('/fitness', fitnessRoutes);

module.exports = router;