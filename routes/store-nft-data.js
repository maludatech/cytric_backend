import express from "express";
import { routeController } from "../controllers/routeController.js";

const router = express.Router();

router.post("/post", routeController);

export default router;
