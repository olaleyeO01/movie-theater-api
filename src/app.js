const express = require("express");
const app = express();
const userRouter = require("/Users/Olayele.Oduola/Bootcamp/Week6/movie-theater-api/routes/user.js");
const showRouter = require("/Users/Olayele.Oduola/Bootcamp/Week6/movie-theater-api/routes/show.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/shows", showRouter);

module.exports = app;
