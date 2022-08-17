/*
  Warnings:

  - You are about to drop the column `user_updated_id` on the `favorite_products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `favorite_products` DROP FOREIGN KEY `favorite_products_user_updated_id_fkey`;

-- AlterTable
ALTER TABLE `favorite_products` DROP COLUMN `user_updated_id`;
