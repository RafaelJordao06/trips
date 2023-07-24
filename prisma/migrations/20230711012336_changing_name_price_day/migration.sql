/*
  Warnings:

  - You are about to drop the column `endData` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `priceDay` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `startData` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerDay` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "endData",
DROP COLUMN "imageUrl",
DROP COLUMN "priceDay",
DROP COLUMN "startData",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "imagesUrl" TEXT[],
ADD COLUMN     "pricePerDay" DECIMAL(8,2) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
