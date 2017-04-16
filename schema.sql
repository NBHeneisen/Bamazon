CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
	dept_name VARCHAR(100) NOT NULL,
    price DECIMAL(13,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY(item_id)
);

SELECT*FROM products;

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Television", "Electronics", 499.99, 82);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Hair dryer", "Toiletries", 39.99, 50);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Table", "Furniture", 199.99, 34);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Couch", "Furniture", 159.99, 20);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Nintendo 2DS", "Electronics", 149.99, 200);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 999.99, 13);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Socket Wrench", "Tools", 15.99, 2);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Sleeping Bag", "Outdoors", 139.99, 5);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Wildflower Seeds", "Garden", 2.99, 1000);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Blender", "Home Goods", 99.99, 310);



