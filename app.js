let express = require("express");
let morgan = require("morgan");
let views = require("./views");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");
const app = express();
app.use("/wiki", wikiRouter);
app.use("/users", userRouter);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
