/*
  Warnings:

  - You are about to drop the column `name` on the `Client` table. All the data in the column will be lost.
  - Added the required column `city` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `county` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_code` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street_address` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "name",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "county" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "post_code" TEXT NOT NULL,
ADD COLUMN     "street_address" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
