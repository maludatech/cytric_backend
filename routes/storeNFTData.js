import express from "express";
import { storeNFTData } from "../controllers/storeNFTData.js";

const router = express.Router();

router.post("/store-nft-data", storeNFTData);

export default router;
