-- CreateTable
CREATE TABLE "compliments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "userSenderId" TEXT NOT NULL,
    "userReceiverId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("userSenderId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("userReceiverId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("tagId") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
