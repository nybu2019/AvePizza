var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient

let url = "mongodb://localhost:27017/";

const dbName = "pizzasDatabase6";
const pizzasCollectionName = "pizzas";
const orderCollectionName = "orders";





function addCollection(collectionName) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        let dbo = db.db(dbName);
        dbo.createCollection(collectionName, function(err, res) {
            if (err) throw err;
            console.log("Collection " + collectionName + " is created!");
            db.close();
        });
    });
}

function initDatabase() {

    // let db = new Db(dbName, new Server("localhost", 27017));
    // db.open(function(err, db) {
    //     if (err) throw err;

    //     let pizzasCollection = db.collection(pizzasCollectionName);
    //     pizzasCollection.insertOne({title: "ukrainian", weight: 650}, function(err, res) {
    //         if (err) throw err;

    //         console.log("inserted");
    //     });

    //     db.close();
    // });

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        let database = db.db(dbName);

        const pizzasCollection = database.collection(pizzasCollectionName);
        const orderCollection = database.collection(orderCollectionName);

        // pizzasCollection.insertOne({title: "diablo", weight: 45});

        console.log("init");
        db.close();
    });

    // addCollection(pizzasCollectionName);
    // addCollection(orderCollectionName);

    // MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    //     if (err) throw err;

    //     let dbo = db.db(dbName);
    //     dbo.collection(pizzasCollectionName).insertOne({title: "palermo", weight: "350"}, function(err, res) {
    //         if (err) throw err;
    //         console.log("Item is added!");
    //         db.close();
    //     });
    //     dbo.collection(pizzasCollectionName).insertOne({title: "neapoly", weight: "420"}, function(err, res) {
    //         if (err) throw err;
    //         console.log("Item is added!");
    //         db.close();
    //     });
    // });
}

function fillDatabase() {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        let database = db.db(dbName);

        const pizzasCollection = database.collection(pizzasCollectionName);
        const orderCollection = database.collection(orderCollectionName);

        pizzasCollection.insertOne({title: "diablo", weight: 45});
        pizzasCollection.insertOne({title: "palermo", weight: 20});
        pizzasCollection.insertOne({title: "neapoly", weight: 36});
        pizzasCollection.insertOne({title: "ukr", weight: 80});

        console.log("filled");
        db.close();
    });
}

function showPizzasContent() {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(pizzasCollectionName).find({}).toArray(function(err, res) {
            if (err) throw err;
            console.log("found: " + JSON.stringify(res));
            db.close();
        });
    });
}



exports.initDatabase = initDatabase;
exports.fillDatabase = fillDatabase;
exports.showPizzasContent = showPizzasContent;
