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

//creates the sales interface for the customer user
function sale() {
    console.log("connected as id " + connection.threadId);

    //Welcome customer
    console.log("Welcome to Bamazon! Below are our sale for items today.")
    console.log("")
    console.log("")

    //List products for customer
    connection.connect(function(err){
        connection.query('SELECT item_id, product_name, dept_name, price, stock_quantity FROM products', function(err, rows){
            if(err) throw err;
            for(row = 0; row < rows.length; row++){
                console.log("ID: " + rows[row].item_id + "  ||  Product name: " + rows[row].product_name + "  ||  Department: " + rows[row].dept_name + "  ||  Price: " + rows[row].price + "  ||  Stock Quantity: " + rows[row].stock_quantity);
                console.log("");
            };
        salesPrompt();
        });
        connection.end();
    });
};


function salesPrompt() {
    console.log("---------------------------")
    promptly.prompt("Please choose the ID of the product you're interested in: ")
    .then(function (value) {
        console.log(value);
        connection.query('SELECT item_id, product_name, dept_name, price, stock_quantity FROM products WHERE item_id = ?',[rows[row].item_id], function(err, rows){
            if(err) throw err;
            console.log(" You chose:")
            console.log("ID: " + rows[value].item_id + "  ||  Product name: " + rows[value].product_name + "  ||  Department: " + rows[value].dept_name + "  ||  Price: " + rows[value].price + "  ||  Stock Quantity: " + rows[value].stock_quantity);
            });
    });
}

sale();