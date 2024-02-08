/*
  Warnings:

  - Made the column `postId` on table `Flag` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Flag" DROP CONSTRAINT "Flag_postId_fkey";

-- AlterTable
ALTER TABLE "Example" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "Flag" ADD COLUMN     "content" TEXT,
ALTER COLUMN "postId" SET NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AddForeignKey
ALTER TABLE "Flag" ADD CONSTRAINT "Flag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
