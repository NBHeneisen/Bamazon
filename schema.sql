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

INSERT INTO programming_languages (languages, rating)
VALUES ("VBA", 2);