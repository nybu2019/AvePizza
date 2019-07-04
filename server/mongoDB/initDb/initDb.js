const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");

const url = "mongodb://localhost:27017/";

const databaseTools = fs.readFileSync("../databaseTools.json");  
const {dbName, pizzasCollectionName, orderCollectionName} = JSON.parse(databaseTools);

/** 
 * @param {string} fileName 
 */
function fillCollection(collection, fileName) {
    collection.deleteMany({}, function(err, res) {
        if (err) throw err;

        console.log("deleted " + res.result.n + " object(s)");
    });
    
    
    const data = fs.readFileSync(fileName);  
    const parsedData = JSON.parse(data);

    
    collection.insertMany(parsedData[collection.s.name], function(err, res) {
        if (err) throw err;            
        
        console.log("inserted " + res.insertedCount + " object(s)");
    });
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
        fillCollection(orderCollection, orderCollectionName + ".json");

        db.close();
    });
}

initDatabase();
