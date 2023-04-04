const mysql = require("mysql2")

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node',
    port: 3306,  
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});