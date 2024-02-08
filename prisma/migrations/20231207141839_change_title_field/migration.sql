/*
  Warnings:

  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Added the required column `titleArabic` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleLatin` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Example" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "title",
ADD COLUMN     "titleArabic" TEXT NOT NULL,
ADD COLUMN     "titleLatin" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();
