var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  //database: "myDatabase01"
});


// check connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// create database
var database = "myDatabase01";
var query01 = "CREATE DATABASE IF NOT EXISTS " + database;
var query01b = "USE " + database;

  console.log(query01);
  console.log(query01b);
  
con.query(query01, function (err, result) {
    if (err) throw err;
    console.log("Database created: " + database);
  });

con.query(query01b, function (err, result) {
    if (err) throw err;
    console.log("Database in use: " + database);
  });


// Drop table customers if Exists!!
var table = "customers";
var query02 = "DROP TABLE IF EXISTS " + table;

con.query(query02, function(err, results) {
    if (err) throw err;
    console.log("Old table dropped: " + table);
});
 

// Create table customers 
var query03 = "CREATE TABLE " + table + " (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
 
con.query(query03, function (err, result) {
    if (err) throw err;
    console.log("New table created: " + table);
}); 


// insert values into table 
var query04 = "INSERT INTO " + table + " (name, address) VALUES ?";

var values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ];

con.query(query04, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});


// show table content 
var query05 = "SELECT * FROM " + table;

con.query(query05, function (err, result, fields) {
    if (err) throw err;
	console.log(query05);
    for (let i in result) {
		// console.log(result[i].id);
		// console.log(result[i].name);
		// console.log(result[i].address);
		process.stdout.write("ID: " + result[i].id + "; Name: " + result[i].name + "; Address: " + result[i].address + ".\n");  
	}
});


