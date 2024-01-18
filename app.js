import express from "express";
import { Db, MongoClient, ServerApiVersion } from "mongodb";
const app = express();
const port = 3000;
let db = undefined;
// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://restaurantapi:restaurant@cluster0.dv6p0ru.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    db = await client.db("restaurant_directory");
    const restaurants = db.collection("restaurants");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  let restaurants = [];
  let cursor = await db.collection("restaurants").find();
  for await (const doc of cursor) {
    restaurants.push(doc);
    console.log(doc);
  }
  await client.close();
  res.send(restaurants);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
