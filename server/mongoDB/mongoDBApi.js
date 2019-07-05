const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

const databaseTools = fs.readFileSync("mongoDB/databaseTools.json");  
const {dbName, pizzasCollectionName, orderCollectionName} = JSON.parse(databaseTools);


function getPizzasFormDatabase() {
    return new Promise(function(resolve, reject) {
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            const database = db.db(dbName);
            const pizzasCollection = database.collection(pizzasCollectionName);


            pizzasCollection.find({}).toArray(function(err, res) {
                if (err) throw err;
                db.close();
                resolve(res);
            });
        });
    });
}


exports.getPizzasFormDatabase = getPizzasFormDatabase;
