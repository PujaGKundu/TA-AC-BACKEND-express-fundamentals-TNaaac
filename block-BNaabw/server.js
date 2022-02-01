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
/*
app.get("/", (req, res) => {
  res.send("Welcom to Express");
});

app.get("/users", (req, res) => {
  res.send("Users Page");
});
*/

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/gallery.html");
});

app.get("/data", (req, res) => {
  res.sendFile(__dirname + "/data.html");
});

//Error handler
app.use((req, res, next) => {
  res.send("Page Not Found");
});

app.use((err, req, res, next) => {
  res.send(err);
});

//Listener
app.listen(4000, () => {
  console.log("Server listening on port 4k");
});
