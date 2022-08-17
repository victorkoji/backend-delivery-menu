/*
  Warnings:

  - You are about to drop the column `user_updated_id` on the `favorite_restaurants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `favorite_restaurants` DROP FOREIGN KEY `favorite_restaurants_user_updated_id_fkey`;

-- AlterTable
ALTER TABLE `favorite_restaurants` DROP COLUMN `user_updated_id`;
