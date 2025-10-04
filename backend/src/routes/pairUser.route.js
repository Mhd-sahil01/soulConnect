import express from "express";
import { createPair } from "../controllers/pairUser.controller.js";

const pairRouter = express.Router();

pairRouter.post("/create", createPair);
// pairRouter.post("/join/:pairId", joinPair);
// pairRouter.post("/unpair/:pairId", unPair);

export default pairRouter;