var express = require("express");
var logger = require("morgan");
var cookieP = require("cookie-parser");

var app = express();

//Morgan
app.use(logger("dev"));

//Cookie-parser
app.use(cookieP());

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use(express.urlencoded({ exteded: false }));

app.use("/about", (req, res, next) => {
  res.cookie("username", "Puja");
  next();
});

app.get("/", (req, res) => {
  req.cookies;
});

app.listen(3000, () => {
  console.log("Server listening to port 3k");
});
