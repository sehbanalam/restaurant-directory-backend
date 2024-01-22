import express from "express";
import "dotenv/config";

//IMPORT ROUTES FROM EACH MODULE
import restaurant_router from "./modules/restaurant/routes.js";

const app = express();

app.get("/", async (req, res) => {
  res.json({ Restaurant: "Welcome To Restaurant API by SEHBAN ALAM" });
});

// ATTACH ROUTES TO EXPRESS INSTANCE
app.use("/restaurant", restaurant_router);

export default app;
