let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

const dbName = "pizzasDat1abase";
const pizzasListCollectionName = "pizza1sList";
const orderCollectionName = "or1der";



function addCollection(collectionName) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.createCollection(collectionName, function(err, res) {
            if (err) throw err;
            console.log("Collection " + collectionName + " is created!");
            db.close();
        });
    });
}

function initDatabase() {
    MongoClient.connect(url + dbName, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        console.log("Database " + dbName + " is created!");
        db.close();
    });

    addCollection(pizzasListCollectionName);
    addCollection(orderCollectionName);
}

function showPizzasContent() {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(pizzasListCollectionName).find(function(err, res) {
            if (err) throw err;
            console.log("found: " + res);
            db.close();
        });
    });
}



exports.initDatabase = initDatabase;
exports.showPizzasContent = showPizzasContent;