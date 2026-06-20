-- CreateTable
CREATE TABLE "stock_master" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "industry" VARCHAR(100) NOT NULL,
    "market" VARCHAR(50),
    "isDelisted" BOOLEAN NOT NULL DEFAULT false,
    "listedAt" TIMESTAMP(3),
    "delistedAt" TIMESTAMP(3),
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" VARCHAR(50) NOT NULL DEFAULT 'default',
    "updatedBy" VARCHAR(50) NOT NULL DEFAULT 'default',

    CONSTRAINT "stock_master_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stock_master_code_key" ON "stock_master"("code");
