import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/:pairId/send", protectedRoute, sendMessage);
router.get("/:pairId", protectedRoute, getMessages);

export default router;