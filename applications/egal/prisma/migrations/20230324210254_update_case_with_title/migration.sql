/*
  Warnings:

  - Added the required column `title` to the `Case` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Case" ADD COLUMN     "title" TEXT NOT NULL;
