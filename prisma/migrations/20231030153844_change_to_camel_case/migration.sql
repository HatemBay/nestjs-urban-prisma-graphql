/*
  Warnings:

  - You are about to drop the column `created_at` on the `Example` table. All the data in the column will be lost.
  - You are about to drop the column `post_id` on the `Example` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Example` table. All the data in the column will be lost.
  - You are about to drop the column `author_id` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `dislikes_count` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `is_u_18` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likes_count` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `country_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `google_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `google_profile` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `is_u_18` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[googleId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Example` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Example" DROP CONSTRAINT "Example_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_author_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_country_id_fkey";

-- DropIndex
DROP INDEX "User_google_id_key";

-- AlterTable
ALTER TABLE "Example" DROP COLUMN "created_at",
DROP COLUMN "post_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
ADD COLUMN     "postId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "author_id",
DROP COLUMN "created_at",
DROP COLUMN "dislikes_count",
DROP COLUMN "is_u_18",
DROP COLUMN "likes_count",
DROP COLUMN "updated_at",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
ADD COLUMN     "dislikesCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isU18" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "likesCount" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT NOW();

-- AlterTable
ALTER TABLE "User" DROP COLUMN "country_id",
DROP COLUMN "created_at",
DROP COLUMN "email_verified",
DROP COLUMN "google_id",
DROP COLUMN "google_profile",
DROP COLUMN "is_u_18",
DROP COLUMN "updated_at",
ADD COLUMN     "countryId" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "googleProfile" JSONB,
ADD COLUMN     "isU18" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT NOW();

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
