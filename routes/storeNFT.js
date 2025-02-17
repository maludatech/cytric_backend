import express from "express";
import { storeNFT } from "../controllers/storeNFT.js";

const router = express.Router();

router.post("/", storeNFT);

export default router;
