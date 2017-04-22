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


//creates the manager's view of the website
function managerView() {
    console.log("connected as id " + connection.threadId);
    console.log("Logged in as manager.")
    promptly.choose('What would you like to do? ', ['View Products for Sale', ''], function (err, value) {
        console.log('Answer:', value);
    });
};