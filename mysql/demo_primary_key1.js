const mysql = require("mysql2")

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb',
    port: 3306,  
});

// Create primary key on an existing table
con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Table altered");
    });
});