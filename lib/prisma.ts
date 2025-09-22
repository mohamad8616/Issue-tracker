import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};
