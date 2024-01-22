import express from "express";
import { get_all_restaurants } from "./handlers/get_all_restaurants.js";
const restaurant_router = express.Router();

// define the home page route
restaurant_router.get("/", get_all_restaurants);

export default restaurant_router;
