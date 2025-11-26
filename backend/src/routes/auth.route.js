import express from "express";
import { login, logout, signUp, checkAuth } from "../controllers/auth.controller.js";
import { protectedRoute } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

// Define routes for signup, login, and logout
authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/check", protectedRoute, checkAuth);

export default authRouter;