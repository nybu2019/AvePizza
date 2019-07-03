const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");

const url = "mongodb://localhost:27017/";

const dbName = "pizzasDatabase1";
const pizzasCollectionName = "pizzas";
const orderCollectionName = "orders";

/** 
 * @param {string} fileName 
 */
function fillCollection(collection, fileName) {
    let flag = true;
    collection.countDocuments(function(err, res) {
        if (err) throw err;

        flag = !res;
        console.log(flag);
    });
    console.log(flag);
    
    
    if (flag) {     
        const data = fs.readFileSync(fileName);  
        const parsedData = JSON.parse(data);

        parsedData.pizzas.forEach(function(pizzaObj) {
            collection.insertOne(pizzaObj, function(err, res) {
                if (err) throw err;            
                console.log("object is inserted");
            });
        });
    }
    else {
        console.log("already filled");
    }
}


function initDatabase() {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        let database = db.db(dbName);
        console.log("Database " + dbName + " is created.");

        const pizzasCollection = database.collection(pizzasCollectionName);
        console.log("Collection " + pizzasCollectionName + " is added.");
        const orderCollection = database.collection(orderCollectionName);
        console.log("Collection " + orderCollectionName + " is added.");


        fillCollection(pizzasCollection, pizzasCollectionName + ".json");

        // pizzasCollection.insertOne({title: "diablo", weight: 45}, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 object is inserted");
        // });
        // pizzasCollection.insertOne({title: "palermo", weight: 20}, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 object is inserted");
        // });
        // pizzasCollection.insertOne({title: "neapoly", weight: 36}, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 object is inserted");
        // });
        // pizzasCollection.insertOne({title: "ukr", weight: 80}, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 object is inserted");
        // });

        db.close();
    });
}

initDatabase();
