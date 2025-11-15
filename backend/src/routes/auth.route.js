import express from "express";
import { login, logout, signUp } from "../controllers/auth.controller.js";

const authRouter = express.Router();

// Define routes for signup, login, and logout
authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;