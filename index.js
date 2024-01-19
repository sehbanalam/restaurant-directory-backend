import express from "express";
import "dotenv/config";
import db from "./dbConnect.js";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  res.json({ Restaurant: "Welcome To Restaurant API by SEHBAN ALAM" });
});

app.get("/getRestaurants", async (req, res) => {
  let restaurants = [];
  let cursor = await db.collection("restaurants").find();
  for await (const doc of cursor) {
    restaurants.push(doc);
  }
  res.json(restaurants);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
