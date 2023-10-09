-- AlterTable
ALTER TABLE "User" ADD COLUMN     "google_profile" JSONB,
ALTER COLUMN "created_at" SET DEFAULT NOW() + interval '1 year',
ALTER COLUMN "updated_at" SET DEFAULT NOW() + interval '1 year';
