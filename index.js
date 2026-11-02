import express from 'express'
import 'dotenv/config'
// import cors from 'cors'

const app = express();
const PORT = 5000;

// app.use(cors());
app.use(express.json());

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

 connectToMongoDB();

app.get("/", (req, res) =>{
    res.send({"message": "Hello from SportNest Server!"})
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})