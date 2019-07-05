const fs = require("fs");
const mongoDBApi = require("../mongoDB/mongoDBApi.js");
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

router.get("/pizzas/:type", function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json"});

    mongoDBApi.getPizzasFormDatabase()
    .then(function(allPizzas) {
        if (req.params.type === "all") {
            res.write(JSON.stringify(allPizzas));
        } else
        {
            const typePizzas = allPizzas.filter(function(element) {
                return element.type === req.params.type;
            });
            res.write(JSON.stringify(typePizzas));
        }
    
        res.end();
    });    
});


module.exports = router;
