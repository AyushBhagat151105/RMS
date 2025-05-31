-- DropIndex
DROP INDEX "tables_number_key";

-- CreateIndex
CREATE INDEX "tables_restaurantId_idx" ON "tables"("restaurantId");
