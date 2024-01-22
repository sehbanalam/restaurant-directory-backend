import { MongoClient, ServerApiVersion } from "mongodb";

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

var db;

function connect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();
    // Send a ping to confirm a successful connection
    db = client.db("restaurant_directory");
    console.log(
      "Pinged your deployment. You successfully connected to restaurant_directory!"
    );
  } catch (err) {
    console.log("Error Connecting DB", err);
  }
}

connect();
export default db;
