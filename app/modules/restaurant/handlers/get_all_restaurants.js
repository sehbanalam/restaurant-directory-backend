import { get_all_restaurants_from_db } from "../services/get_all_restaurants_from_db.js";

export const get_all_restaurants = async (req, res) => {
  let restaurants = await get_all_restaurants_from_db();
  res.json(restaurants);
};
