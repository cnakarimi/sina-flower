import { MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://cnakarimi:vQLJAsie8YQfchfL@cluster0.9inkg.mongodb.net/products?retryWrites=true&w=majority"
  );
  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  const result = await db.collection("comments").insertOne(document);
  return result;
}

async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}

async function handler(req, res) {
  const productId = req.query.productId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "نتونستیم به دیتابیس متصل شیم" });
    return;
  }

  if (req.method === "POST") {
    const { name, text } = req.body;

    if (!name || name.trim() == "" || !text || text.trim() === "") {
      res.status(422).json({ message: "خطای متن ورودی" });
      client.close();

      return;
    }

    const newComment = { name, text, productId };

    let result;

    try {
      result = await insertDocument(client, newComment);
      newComment._id = result.insertedId;
      res
        .status(201)
        .json({ message: "نظر شما اضافه شد", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "نظز شما اضافه نشد" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { productId: productId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "دریافت کامنت ها ناموفق بود" });
    }
  }

  client.close();
}

export default handler;
