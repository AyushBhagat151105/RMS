/*
  Warnings:

  - You are about to drop the column `userId` on the `Orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_userId_fkey";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "userId",
ADD COLUMN     "waiterId" TEXT;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_waiterId_fkey" FOREIGN KEY ("waiterId") REFERENCES "Waiter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
