import db from "../../../utils/dbHelper.js";

export const get_all_restaurants_from_db = async () => {
  let restaurants = [];
  let cursor = await db.collection("restaurants").find();
  for await (const doc of cursor) {
    restaurants.push(doc);
  }
  return restaurants;
};
