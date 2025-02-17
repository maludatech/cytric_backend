import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./db/database.js";
import storeNFT from "./routes/storeNFT.js";
import getNFT from "./routes/getNFT.js";

dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/nft", storeNFT);
app.use("/api/nft", getNFT);

const PORT = process.env.PORT || 3500;

connectToDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
