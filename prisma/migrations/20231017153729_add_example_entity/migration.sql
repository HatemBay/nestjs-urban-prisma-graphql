-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER',
ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';

-- CreateTable
CREATE TABLE "Example" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '1 year',
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '1 year',

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Example" ADD CONSTRAINT "Example_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
