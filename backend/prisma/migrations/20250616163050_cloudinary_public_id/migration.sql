/*
  Warnings:

  - Added the required column `cloudinaryPublicId` to the `menuItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menuItem" ADD COLUMN     "cloudinaryPublicId" TEXT NOT NULL;
