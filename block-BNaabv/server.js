var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

var app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ exteded: false }));
app.use(logger("dev"));
app.use(cookieParser());

app.use("/admin", (req, res, next) => {
  next("Unauthorized");
});

app.get("/", (req, res) => {
  res.send("<h2>Welcome to express</h2>");
});

app.get("/about", (req, res) => {
  res.send("My name is qwerty");
});

app.get("/users/:username", (req, res) => {
  var userName = req.params.username;
  res.send(userName);
});

app.post("/form", (req, res) => {
  console.log(req.body);
});

app.post("/json", (req, res) => {
  console.log(req.body);
});

app.use((req, res, next) => {
  req.cookies;
  res.send("Page Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(3000, () => {
  console.log("Server listening on port 3k");
});
