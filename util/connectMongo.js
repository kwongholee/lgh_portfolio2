import { MongoClient } from "mongodb"; 
const options = {useNewUrlParser: true}
let connectMongo;

if(process.env.NODE_ENV === "development") {
  if(!global._mongo) {
    global._mongo = new MongoClient(process.env.MONGO_URL, options).connect();
  }
  connectMongo = global._mongo;
} else {
  connectMongo = new MongoClient(process.env.MONGO_URL, options).connect();
}
export {connectMongo}