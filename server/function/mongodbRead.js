const MongoClient = require("mongodb").MongoClient;
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

async function run(data) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("db");
        const collection = db.collection("users");
        const count = await collection.countDocuments();
        let user = {_id: Number(data[6]),name: data[0], family: data[1], patronymic: data[2], birth: data[3], position: data[4],experience: data[5]};
        await collection.insertOne(user);
        console.log('сохранение выполнено')
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}

module.exports = {server:run}