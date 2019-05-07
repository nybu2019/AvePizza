const fs = require("fs");
const express = require("express");
const router = express.Router();

function readFile(fileName) {
    return fs.readFileSync(__dirname + "/../../code/main/" + fileName, 'utf8');
}
function readImage(fileName) {
    return fs.readFileSync(__dirname + "/../../resources/" + fileName);
}



router.use(express.static(__dirname + "/../../resources/footer"));
router.use(express.static(__dirname + "/../../resources/footer/payMethod"));
router.use(express.static(__dirname + "/../../resources/imagesIndex"));
router.use(express.static(__dirname + "/../../resources/ourTeam"));
router.use(express.static(__dirname + "/../../resources/sideIcons"));



router.get("/", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(readFile("index.html"));
    res.end();
});
router.get("/mainAction.js", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/javascript"});
    res.write(readFile("mainAction.js"));
    res.end();
});
router.get("/mainStyles.css", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/css"});
    res.write(readFile("mainStyles.css"));
    res.end();
});




module.exports = router;
