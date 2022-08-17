/*
  Warnings:

  - You are about to drop the column `highlight` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `statuId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `status` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `status_order_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_statuId_fkey`;

-- DropForeignKey
ALTER TABLE `status` DROP FOREIGN KEY `status_user_created_id_fkey`;

-- DropForeignKey
ALTER TABLE `status` DROP FOREIGN KEY `status_user_updated_id_fkey`;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `highlight`,
    DROP COLUMN `statuId`,
    ADD COLUMN `status_order_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `status`;

-- CreateTable
CREATE TABLE `status_order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `user_created_id` INTEGER NOT NULL,
    `user_updated_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `status_order` ADD CONSTRAINT `status_order_user_created_id_fkey` FOREIGN KEY (`user_created_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `status_order` ADD CONSTRAINT `status_order_user_updated_id_fkey` FOREIGN KEY (`user_updated_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_status_order_id_fkey` FOREIGN KEY (`status_order_id`) REFERENCES `status_order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
