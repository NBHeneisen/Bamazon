//Add npm requirements
var mysql = require('mysql');
var promptly = require('promptly');

//establish mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user: "root",
    password:"JJ12",
    database: "bamazon" 
});

function managerView() {

    
}