const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected");
    con.query("CREATE DATABASE mydb", function(err, result){
        if (err) throw err; 
        console.log("Database created");
    });
});