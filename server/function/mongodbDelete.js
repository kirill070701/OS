const MongoClient = require("mongodb").MongoClient;
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);



async function run(number) {
    var results
    try {
        await mongoClient.connect();
        const db = mongoClient.db("db");
        const collection = db.collection("users");
        results = await collection.findOneAndDelete({_id:number})
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
    //console.log(results)
    return results
}

module.exports={server:run} 