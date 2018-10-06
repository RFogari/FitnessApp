const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//Use API routes
router.use("./api", apiRoutes);

//If no API send user back to home
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});