import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://cnakarimi:vQLJAsie8YQfchfL@cluster0.9inkg.mongodb.net/signIn?retryWrites=true&w=majority"
  );
  return client;
}
