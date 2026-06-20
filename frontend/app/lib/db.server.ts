import { PrismaClient } from "../../generated/prisma";

declare global {
  // 開発時のホットリロードで接続が重複しないようにグローバルに保持する
  var __prisma: PrismaClient | undefined;
}

export const db =
  global.__prisma ??
  new PrismaClient({
    datasource: { url: process.env.DATABASE_URL },
  });

if (process.env.NODE_ENV !== "production") {
  global.__prisma = db;
}
