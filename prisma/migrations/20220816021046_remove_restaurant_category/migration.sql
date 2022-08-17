/*
  Warnings:

  - You are about to drop the column `restaurant_category_id` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_restaurant_category_id_fkey`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `restaurant_category_id`;
