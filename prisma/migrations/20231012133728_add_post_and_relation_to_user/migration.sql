-- AlterTable
ALTER TABLE "User" ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "likes_count" INTEGER NOT NULL DEFAULT 1,
    "dislikes_count" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER NOT NULL,
    "tags" "Tag"[],
    "is_u_18" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '1 year',
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '1 year',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
