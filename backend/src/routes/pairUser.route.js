import express from "express";
import { createPair } from "../controllers/pairUser.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const pairRouter = express.Router();

pairRouter.post("/create", protectedRoute, createPair);
// pairRouter.post("/join/:pairId", joinPair);
// pairRouter.post("/unpair/:pairId", unPair);

export default pairRouter;