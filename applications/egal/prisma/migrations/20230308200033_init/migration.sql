-- CreateTable
CREATE TABLE "CaseHistorySession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "case_session_type" TEXT NOT NULL,
    "case_history_session_state" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CaseHistorySessionMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "caseHistorySessionId" TEXT,
    CONSTRAINT "CaseHistorySessionMessage_caseHistorySessionId_fkey" FOREIGN KEY ("caseHistorySessionId") REFERENCES "CaseHistorySession" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
