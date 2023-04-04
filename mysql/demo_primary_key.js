const mysql = require("mysql2")

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb',
    port: 3306,  
});

// Create primary key when creating the table
con.connect(function(err){
    if (err) throw err;
    console.log("Connected");

    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Table created");
    });
});