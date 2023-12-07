/*
  Warnings:

  - You are about to drop the column `content` on the `Example` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - Added the required column `contentArabic` to the `Example` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentEnglish` to the `Example` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentFrench` to the `Example` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentArabic` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentEnglish` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contentFrench` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Example" DROP COLUMN "content",
ADD COLUMN     "contentArabic" TEXT NOT NULL,
ADD COLUMN     "contentEnglish" TEXT NOT NULL,
ADD COLUMN     "contentFrench" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
ADD COLUMN     "contentArabic" TEXT NOT NULL,
ADD COLUMN     "contentEnglish" TEXT NOT NULL,
ADD COLUMN     "contentFrench" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();
