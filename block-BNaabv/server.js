var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

var app = express();

//Middleware
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ exteded: false }));
app.use(logger("dev"));
app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("username", "demo");
  next();
});

//Routes
app.get("/", (req, res) => {
  res.send("<h2>Welcome to express</h2>");
});

app.get("/about", (req, res) => {
  res.send("My name is qwerty");
});

app.get("/users/:username", (req, res) => {
  var userName = req.params.username;
  res.send(`<h2>${userName}</h2>`);
});

app.post("/form", (req, res) => {
  res.json(req.body);
});

app.post("/json", (req, res) => {
  res.json(req.body);
});

//Error handler
app.use((req, res, next) => {
  res.send("Page Not Found");
});

app.use((err, req, res, next) => {
  res.send(err);
});

//Listener
app.listen(3000, () => {
  console.log("Server listening on port 3k");
});
