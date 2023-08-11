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

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  res.json(user);
});

router.get("/:id/shows", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id, { include: Show });
  res.json(user.Shows);
});

router.put("/:id/watch", async (req, res) => {
  const userId = req.params.id;
  const showId = req.body.showId;

  const user = await User.findByPk(userId);
  const show = await Show.findByPk(showId);

  await user.addShow(show);

  await User.update(
    { watched: true },
    {
      where: { id: showId },
    }
  );

  res.json(user);
});

module.exports = router;
