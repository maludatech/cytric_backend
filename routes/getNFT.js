import express from "express";
import { getNFTById, getNFTGallery } from "../controllers/getNFT.js";

const router = express.Router();

router.get("/:id", getNFTById);

router.get("/gallery/:wallet", getNFTGallery);

export default router;
