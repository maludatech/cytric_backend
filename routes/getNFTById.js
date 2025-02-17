import express from "express";
import { getNFTById } from "../controllers/getNFTById.js";

const router = express.Router();

router.get("/:id", getNFTById);

export default router;
