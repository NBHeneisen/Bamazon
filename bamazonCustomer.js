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
            console.log("---------------------------")
            
            //user chooses product and product choice is listed
            promptly.prompt("Please choose the ID of the product you're interested in: ")
            .then(function (value) {
                connection.query('SELECT item_id, product_name, dept_name, price, stock_quantity FROM products WHERE item_id = ?',[value], function(err, option){
                    if(err) throw err;
                    console.log("You chose:");
                    console.log("ID: " + option[0].item_id + "  ||  Product name: " + option[0].product_name + "  ||  Department: " + option[0].dept_name + "  ||  Price: " + option[0].price + "  ||  Stock Quantity: " + option[0].stock_quantity);
                    //user chooses quantity they would like to purchase
                    promptly.prompt("How many would you like to purchase?")
                    .then(function(quantity) {
                        //if not enough in stock alert user, else confirm and subtract quantity from stock
                        if (quantity > option[0].stock_quantity) {
                            console.log("Not enough in stock");
                        } else {
                            promptly.confirm("Please confirm your purchase: You are buying " + quantity + " of the " + option[0].product_name + ".")
                            .then(function(confirmation) {
                                if(confirmation === true) {
                                    connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [option[0].stock_quantity - quantity, option[0].item_id], function(err, results){
                                        if(err) throw err;
                                        connection.query('SELECT item_id, product_name, dept_name, price, stock_quantity FROM products WHERE item_id = ?',[value], function(err, confirmedOption){
                                            if(err) throw err;
                                            console.log("(Quantity reduced to " + confirmedOption[0].stock_quantity + ")");
                                            console.log("Purchase confirmed! Your total comes to " + confirmedOption[0].price * quantity + " for the " + quantity + " " + confirmedOption[0].product_name + "(s)!");
                                            connection.end();
                                        });
                                    });
                                } else {
                                    console.log("Changed your mind?");
                                    connection.end();
                                };
                            });
                        };
                    });
                });
            });
        });
    });
};


sale();