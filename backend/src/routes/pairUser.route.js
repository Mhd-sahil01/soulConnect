import express from "express";
import { createPair, joinPair, unPair, checkPair } from "../controllers/pairUser.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const pairRouter = express.Router();

// Define routes for creating, joining, and unpairing
pairRouter.post("/create", protectedRoute, createPair);
pairRouter.post("/join/:pairId", protectedRoute, joinPair);
pairRouter.post("/unpair/:pairId", protectedRoute, unPair);
pairRouter.get("/check/:pairId", protectedRoute, checkPair)

export default pairRouter;