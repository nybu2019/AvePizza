const fs = require("fs");
const express = require("express");
const router = express.Router();

function readFile(fileName) {
    return fs.readFileSync(__dirname + "/../../code/banner/" + fileName, 'utf8');
}

router.use(express.static(__dirname + "/../../resources/bannerImages/bannerImages"));
router.use(express.static(__dirname + "/../../resources/bannerImages/bannerButtons"));

//banner
router.get("/bannerAction.js", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/javascript"});
    res.write(readFile("bannerAction.js"));
    res.end();
});
router.get("/bannerStyles.css", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/css"});
    res.write(readFile("bannerStyles.css"));
    res.end();
});






module.exports = router;
