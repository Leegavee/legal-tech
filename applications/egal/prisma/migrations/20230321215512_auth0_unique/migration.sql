/*
  Warnings:

  - A unique constraint covering the columns `[auth0_id]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Client_auth0_id_key" ON "Client"("auth0_id");
