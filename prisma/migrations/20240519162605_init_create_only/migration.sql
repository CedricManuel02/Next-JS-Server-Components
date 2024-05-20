-- CreateTable
CREATE TABLE `product` (
    `productId` INTEGER NOT NULL AUTO_INCREMENT,
    `nname` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
