-- Luodaan tietokanta mikäli ei ole jo olemassa
DROP DATABASE IF EXISTS joulukuusikauppa;
CREATE DATABASE IF NOT EXISTS joulukuusikauppa;

-- Otetaan luotu tietokanta käyttöön
USE joulukuusikauppa;

-- Luodaan taulu tuotekategorioille
CREATE TABLE `product_categories` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `description` TEXT,
  `image_url` TEXT
);

-- Luodaan taulu tuotteille
CREATE TABLE `products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `name2` VARCHAR(100) DEFAULT '',
  `description` TEXT,
  `category` INT NOT NULL,
  `price` FLOAT NOT NULL,
  `storage` INT(5) NOT NULL,
  `image_url` TEXT
);

-- Luodaan taulu asiakkaille
CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `lname` VARCHAR(60) NOT NULL,
  `fname` VARCHAR(60) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `address` VARCHAR(60) NOT NULL,
  `post` VARCHAR(5) NOT NULL,
  `city` VARCHAR(20) NOT NULL,
  `uname` VARCHAR(30) NOT NULL UNIQUE,
  `passwd` VARCHAR(255) NOT NULL,
  `role` VARCHAR(10) NOT NULL,
  `registeredAt` DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Luodaan taulu tilauksille
CREATE TABLE `orders` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer` INT NOT NULL,
  `payMethod` VARCHAR(20) NOT NULL,
  `payStatus` VARCHAR(5) NOT NULL,
  `orderStatus` VARCHAR(5) NOT NULL,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `modifiedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Luodaan taulu tilausriveille
CREATE TABLE `order_items` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `order` INT NOT NULL,
  `product` INT NOT NULL,
  `amount` INT NOT NULL,
  `price` FLOAT NOT NULL
);

-- Luodaan tuotteiden ja tuotekategorioiden relaatio
ALTER TABLE `products` ADD CONSTRAINT `productCategoryID` FOREIGN KEY (`category`) REFERENCES `product_categories` (`id`);

-- Luodaan asiakkaiden ja tilausten relaatio
ALTER TABLE `orders` ADD CONSTRAINT `customerID` FOREIGN KEY (`customer`) REFERENCES `users` (`id`);

-- Luodaan tilauksien ja tilausrivien relaatio
ALTER TABLE `order_items` ADD CONSTRAINT `orderID` FOREIGN KEY (`order`) REFERENCES `orders` (`id`);

-- Luodaan tilausrivien ja tuotteiden relaatio
ALTER TABLE `order_items` ADD CONSTRAINT `productID` FOREIGN KEY (`product`) REFERENCES `products` (`id`);
