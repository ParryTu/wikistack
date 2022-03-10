let express = require("express");
let router = express.Router();
let { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("hello");
});

router.post("/", (req, res, next) => {
  res.send("hello");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
