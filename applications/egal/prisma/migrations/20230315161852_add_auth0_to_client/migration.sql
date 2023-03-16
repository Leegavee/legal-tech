/*
  Warnings:

  - Added the required column `auth0_id` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "auth0_id" TEXT NOT NULL;
