const MongoClient = require("mongodb").MongoClient;
    
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url);

async function run(number) {
    var results
    try {
        await mongoClient.connect();
        const db = mongoClient.db("db");
        const collection = db.collection("users");
        results = await collection.findOneAndUpdate({_id:Number(number[0])}, {$set:{name:number[1], family:number[2], patronymic:number[3], birth:number[4], position:number[5], experience:number[6]}})
        //console.log(results)
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
    //console.log(results)
    return results
}

module.exports={server:run} 