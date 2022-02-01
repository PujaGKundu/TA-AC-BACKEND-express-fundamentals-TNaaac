var express = require("express");
var logger = require("morgan");
var cookieP = require("cookie-parser");

var app = express();

app.use(logger("tiny"));
app.use(cookieP());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ exteded: false }));

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use("/about", (req, res, next) => {
  res.cookie("username", "Puja");
  res.end("About Page");
});

app.app.listen(3000, () => {
  console.log("Server listening to port 3k");
});
