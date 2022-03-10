let express = require("express");
let router = express.Router();
let { addPage } = require("../views");
const { Page } = require("../models");

router.get("/", (req, res, next) => {
  res.send("hello");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      slug: "open",
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
