var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});


// check connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// create database
var database = "MYDB";
var query01 = "CREATE DATABASE IF NOT EXISTS " + database;
  console.log(query01);
  
con.query(query01, function (err, result) {
    if (err) throw err;
    console.log("Database created:" + database);
  });
