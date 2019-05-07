const fs = require("fs");
const express = require("express");
const router = express.Router();

function readFile(fileName) {
    return fs.readFileSync(__dirname + "/../../code/pizzaItems/" + fileName, 'utf8');
}

router.use(express.static(__dirname + "/../../resources/pizzaItems"));

//pizzaItems
router.get("/pizzaItemsAction.js", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/javascript"});
    res.write(readFile("pizzaItemsAction.js"));
    res.end();
});
router.get("/pizzaItemsStyles.css", function(req, res) {
    res.writeHead(200, {"Content-Type": "text/css"});
    res.write(readFile("pizzaItemsStyles.css"));
    res.end();
});






module.exports = router;
