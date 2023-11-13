CREATE TABLE `product_categories` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL
);

CREATE TABLE `products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `category` INT(2) NOT NULL,
  `price` DECIMAL(3,2) NOT NULL,
  `storage` INT(5) NOT NULL,
  `image_url` TEXT NOT NULL
);

CREATE TABLE `customers` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `address` VARCHAR(60) NOT NULL,
  `post` VARCHAR(5) NOT NULL,
  `city` VARCHAR(20) NOT NULL,
  `registeredAt` DATE DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `orders` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `customer` INT NOT NULL,
  `payStatus` VARCHAR(5) NOT NULL,
  `orderStatus` VARCHAR(5) NOT NULL,
  `createdAt` DATE DEFAULT (CURRENT_TIMESTAMP),
  `modifiedAt` DATE DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `orderItems` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `order` INT NOT NULL,
  `product` INT NOT NULL,
  `amount` INT NOT NULL,
  `price` DECIMAL(5,2) NOT NULL
);

ALTER TABLE `products` ADD CONSTRAINT `productCategoryID` FOREIGN KEY (`category`) REFERENCES `product_categories` (`id`);

ALTER TABLE `orders` ADD CONSTRAINT `customerID` FOREIGN KEY (`customer`) REFERENCES `customers` (`id`);

ALTER TABLE `orderItems` ADD CONSTRAINT `orderID` FOREIGN KEY (`order`) REFERENCES `orders` (`id`);

ALTER TABLE `orderItems` ADD CONSTRAINT `productID` FOREIGN KEY (`product`) REFERENCES `products` (`id`);
