-- AlterTable
ALTER TABLE "Example" ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 hour',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 hour';

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 hour',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 hour';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 hour',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 hour';
