const MongoClient = require("mongodb").MongoClient;
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

async function run(data) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("db");
        const collection = db.collection("users");
        let user = {name: data[0], age: data[1]};
        const result = await collection.insertOne(user);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}

module.exports = {server:run}