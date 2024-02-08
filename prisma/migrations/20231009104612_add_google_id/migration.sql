/*
  Warnings:

  - You are about to drop the column `regionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Country` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Flag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[google_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Example" DROP CONSTRAINT "Example_postId_fkey";

-- DropForeignKey
ALTER TABLE "Flag" DROP CONSTRAINT "Flag_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_countryId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_regionId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "regionId",
ADD COLUMN     "google_id" TEXT,
ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';

-- DropTable
DROP TABLE "Country";

-- DropTable
DROP TABLE "Example";

-- DropTable
DROP TABLE "Flag";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Region";

-- CreateIndex
CREATE UNIQUE INDEX "User_google_id_key" ON "User"("google_id");
