var mysql = require("mysql");
var dbConfig = require("../config/db.config");
var express = require("express");
var app = express();

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("mysql connected successfully");
});

module.exports = connection;
