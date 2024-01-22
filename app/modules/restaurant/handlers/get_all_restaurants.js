import { get_all_restaurants_from_db } from "../services/get_all_restaurants_from_db.js";
import { response_object } from "../../../utils/response_object.js";

export const get_all_restaurants = async (req, res) => {
  let restaurants = await get_all_restaurants_from_db();
  if (restaurants.length > 0) {
    res.json(new response_object(restaurants, 200, {}));
  } else {
    res.json(
      new response_object({}, 500, {
        code: 500,
        message: "No Restaurants Found",
      })
    );
  }
};
