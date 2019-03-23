var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myDatabase01"
});


// check connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var database = "myDatabase01";
var table = "customers";

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


