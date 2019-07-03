let MongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017/";

const dbName = "pizzasDatabase2";
const pizzasCollectionName = "pizzas";
const orderCollectionName = "orders";


function initDatabase() {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        let database = db.db(dbName);
        console.log("Database " + dbName + " is created.");

        const pizzasCollection = database.collection(pizzasCollectionName);
        console.log("Collection " + pizzasCollectionName + " is added.");
        const orderCollection = database.collection(orderCollectionName);
        console.log("Collection " + orderCollectionName + " is added.");

        pizzasCollection.insertOne({title: "diablo", weight: 45}, function(err, res) {
            if (err) throw err;
            console.log("1 object is inserted");
        });
        pizzasCollection.insertOne({title: "palermo", weight: 20}, function(err, res) {
            if (err) throw err;
            console.log("1 object is inserted");
        });
        pizzasCollection.insertOne({title: "neapoly", weight: 36}, function(err, res) {
            if (err) throw err;
            console.log("1 object is inserted");
        });
        pizzasCollection.insertOne({title: "ukr", weight: 80}, function(err, res) {
            if (err) throw err;
            console.log("1 object is inserted");
        });

        db.close();
    });
}

initDatabase();
