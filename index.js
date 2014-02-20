var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.logger("dev"));

app.use(require("connect-assets")());

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000);
