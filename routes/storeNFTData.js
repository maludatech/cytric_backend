import express from "express";
import { storeNFTData } from "../controllers/storeNFTData.js";

const router = express.Router();

router.post("/post", storeNFTData);

export default router;
