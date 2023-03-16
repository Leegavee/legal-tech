/*
  Warnings:

  - You are about to drop the `CaseHistorySession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CaseHistorySessionMessage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CaseHistorySessionMessage" DROP CONSTRAINT "CaseHistorySessionMessage_caseHistorySessionId_fkey";

-- DropTable
DROP TABLE "CaseHistorySession";

-- DropTable
DROP TABLE "CaseHistorySessionMessage";

-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
