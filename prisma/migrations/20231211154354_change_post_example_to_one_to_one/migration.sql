/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `Example` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Example" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- CreateIndex
CREATE UNIQUE INDEX "Example_postId_key" ON "Example"("postId");
