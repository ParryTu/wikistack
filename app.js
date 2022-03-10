let express = require("express");
let morgan = require("morgan");
let views = require("./views");
const layout = require("./views/layout");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send(layout());
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});
