import express from "express";
import { getMessages } from "../controllers/message.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

// router.post("/send/:pairId", protectedRoute, sendMessage);
router.get("/:pairId", protectedRoute, getMessages);

export default messageRouter;