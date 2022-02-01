var express = require("express");
var logger = require("morgan");

var app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ exteded: false }));
app.use(logger("dev"));

//Routes
app.post("/json", (req, res) => {
  res.json(req.body);
});

//Listener
app.listen(4000, () => {
  console.log("Server listening on port 4k");
});
