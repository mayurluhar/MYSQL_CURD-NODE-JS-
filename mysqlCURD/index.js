var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");
const port = process.env.port || 3000;
const Sequelize = require("sequelize");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  console.log("im running ");
  next();
});
// a route for home page
app.get("/home", (req, res) => {
  res.json({ message: "NodeJs CRUD Application" });
});

// const empController = require("./controller/employee.controller");

// app.use("/emp", empController);

require("./app/routes/employee.routers")(app);

app.listen(port, () => {
  console.log("server listening on port", port);
});
