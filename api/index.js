import express from "express";
import { MongoClient } from "mongodb";
import "dotenv/config";

const app = express();
const port = 3000;

MongoClient.connect(process.env.MONGODB_URI)
  .then(async (client) => {
    app.locals.db = await client.db("restaurant_directory");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (req, res) => {
  const db = req.app.locals.db;
  let restaurants = [];
  let cursor = await db.collection("restaurants").find();
  for await (const doc of cursor) {
    restaurants.push(doc);
  }
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.json(restaurants);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
