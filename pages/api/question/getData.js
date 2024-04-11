import { connectMongo } from "@/app/_utils/connectMongo";

export default async function getData() {
  let db = (await connectMongo).db('lgh_portfolio');
  let result = await db.collection('question_post').find().toArray();
  return result;
}