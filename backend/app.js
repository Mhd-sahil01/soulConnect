import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";

import connectToSocket from "./src/config/socket.js";
import authRoute from "./src/routes/auth.route.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.set("port", (process.env.PORT || 8000));

app.get("/home", (req, res) => { res.send("Home") });
app.use("/api/auth", authRoute);

async function start() {
    const connectDB = await mongoose.connect(process.env.MONGO_URL)
    console.log(`connected to database ${connectDB.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("listening to the port 8000");
    })
}
start();