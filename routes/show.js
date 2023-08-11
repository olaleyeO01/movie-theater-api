const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const {
  User,
  Show,
} = require("/Users/Olayele.Oduola/Bootcamp/Week6/movie-theater-api/models/index.js");

router.get("/", async (req, res) => {
  const user = await User.findAll();
  res.send(user);
});
