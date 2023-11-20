-- Luodaan tietokanta mikäli ei ole jo olemassa
CREATE DATABASE IF NOT EXISTS joulukuusikauppa;

-- Otetaan luotu tietokanta käyttöön
USE joulukuusikauppa;

-- Luodaan taulu tuotekategorioille
CREATE TABLE `product_categories` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `description` TEXT,
  `subcategory` INT
);

-- Luodaan taulu tuotteille
CREATE TABLE `products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `description` TEXT,
  `category` INT NOT NULL,
  `price` DECIMAL(3,2) NOT NULL,
  `storage` INT(5) NOT NULL,
  `image_url` TEXT NOT NULL
);

-- Luodaan taulu asiakkaille
CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `address` VARCHAR(60) NOT NULL,
  `post` VARCHAR(5) NOT NULL,
  `city` VARCHAR(20) NOT NULL,
  `uname` VARCHAR(30) NOT NULL,
  `passwd` VARCHAR(30) NOT NULL,
  `role` VARCHAR(10) NOT NULL,
  `registeredAt` DATE DEFAULT (CURRENT_TIMESTAMP)
);

-- Luodaan taulu tilauksille
CREATE TABLE `orders` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer` INT NOT NULL,
  `payStatus` VARCHAR(5) NOT NULL,
  `orderStatus` VARCHAR(5) NOT NULL,
  `createdAt` DATE DEFAULT (CURRENT_TIMESTAMP),
  `modifiedAt` DATE DEFAULT (CURRENT_TIMESTAMP)
);

-- Luodaan taulu tilausriveille
CREATE TABLE `orderItems` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `order` INT NOT NULL,
  `product` INT NOT NULL,
  `amount` INT NOT NULL,
  `price` DECIMAL(5,2) NOT NULL
);

-- Luodaan tuotteiden ja tuotekategorioiden relaatio
ALTER TABLE `products` ADD CONSTRAINT `productCategoryID` FOREIGN KEY (`category`) REFERENCES `product_categories` (`id`);

-- Luodaan asiakkaiden ja tilausten relaatio
ALTER TABLE `orders` ADD CONSTRAINT `customerID` FOREIGN KEY (`customer`) REFERENCES `users` (`id`);

-- Luodaan tilauksien ja tilausrivien relaatio
ALTER TABLE `orderItems` ADD CONSTRAINT `orderID` FOREIGN KEY (`order`) REFERENCES `orders` (`id`);

-- Luodaan tilausrivien ja tuotteiden relaatio
ALTER TABLE `orderItems` ADD CONSTRAINT `productID` FOREIGN KEY (`product`) REFERENCES `products` (`id`);
