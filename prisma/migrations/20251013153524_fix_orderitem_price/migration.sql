/*
  Warnings:

  - Changed the type of `price` on the `OrderItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "price",
ADD COLUMN     "price" DECIMAL(12,2) NOT NULL;
