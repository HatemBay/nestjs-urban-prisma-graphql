-- AlterTable
ALTER TABLE "Example" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "Flag" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "createdAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AddForeignKey
ALTER TABLE "Flag" ADD CONSTRAINT "Flag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
