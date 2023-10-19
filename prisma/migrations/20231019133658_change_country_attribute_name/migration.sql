/*
  Warnings:

  - You are about to drop the column `region_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_country_id_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_region_id_fkey";

-- AlterTable
ALTER TABLE "Example" ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "region_id",
ADD COLUMN     "country_id" INTEGER,
ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';

-- DropTable
DROP TABLE "Region";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;
