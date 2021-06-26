-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_compliments" (
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
INSERT INTO "new_compliments" ("created_at", "id", "message", "tagId", "userReceiverId", "userSenderId") SELECT "created_at", "id", "message", "tagId", "userReceiverId", "userSenderId" FROM "compliments";
DROP TABLE "compliments";
ALTER TABLE "new_compliments" RENAME TO "compliments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
