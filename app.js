import express from "express";
import dotenv from "dotenv";
import { connectToDb } from "./db/database.js";
import routes from "./routes/store-nft-data.js";

dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/store-nft-data", routes);

const PORT = process.env.PORT || 3500;

connectToDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
