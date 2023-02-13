const express = require("express");
const app = express();
const mysql = require("mysql2");
const BodyParse = require("body-parser");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const router = require("./routes/empRoutes.js");

app.use("/api/employees", router);

app.get("/", (req, res) => {
  res.json("im ON");
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("port activated..");
});
