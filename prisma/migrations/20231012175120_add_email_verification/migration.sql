-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email_verified" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';
