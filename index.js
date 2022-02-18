require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Nandebija:SOiXaCJ6ABHFEloQ@subscribers.sfzie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

const subscribersRouter = require("./Routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(8000, () => console.log("server started"));
