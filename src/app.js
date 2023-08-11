const express = require("express");
const app = express();
const userRouter = require("/Users/Olayele.Oduola/Bootcamp/Week6/movie-theater-api/routes/user.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

module.exports = app;
