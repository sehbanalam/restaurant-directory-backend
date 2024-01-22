import db from "../../utils/dbHelper.js";
import express from "express";
const restaurant_router = express.Router();

// define the home page route
restaurant_router.get("/", async (req, res) => {
  let restaurants = [];
  let cursor = await db.collection("restaurants").find();
  for await (const doc of cursor) {
    restaurants.push(doc);
  }
  res.json(restaurants);
});

export default restaurant_router;
