const express = require("express");
const router = express.Router();



router.get("/", function(req, res) {
    res.send("route1");
});


module.exports = router;
