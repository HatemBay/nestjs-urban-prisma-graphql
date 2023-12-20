-- AlterTable
ALTER TABLE "Example" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT NOW(),
ALTER COLUMN "updatedAt" SET DEFAULT NOW();

-- CreateTable
CREATE TABLE "Flag" (
    "id" SERIAL NOT NULL,
    "reason" "Reason" NOT NULL,
    "postId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),

    CONSTRAINT "Flag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Flag" ADD CONSTRAINT "Flag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
