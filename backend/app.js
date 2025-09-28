import express from "express";

const app = express();

app.get("/home", (req, res) => {
    res.send("Home")
})

app.listen(8000, ()=> {
    console.log("listening to the port 8000");
})