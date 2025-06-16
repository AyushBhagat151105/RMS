import { db } from "@/db";
import { generateQRCodeAndUpload } from "@/services/qrCodegenrator";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { deleteFromCloudinary } from "@/utils/cloudinary";
import { Request, Response } from "express";

export const createTable = asyncHandler(async (req: Request, res: Response) => {
  const { id, role } = req.user ? req.user : { id: null, role: null };

  if (!id || role !== "ADMIN") {
    throw new ApiError(403, "Forbidden: You do not have permission");
  }

  const { restaurantId, number, capacity } = req.body;

  if (!restaurantId || !number || !capacity) {
    throw new ApiError(400, "Bad Request: Missing required fields");
  }

  const table = await db.tables.create({
    data: {
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      number,
      capacity,
    },
  });

  const qrCodeUrl = await generateQRCodeAndUpload(restaurantId, table.id);

  const updatedTable = await db.tables.update({
    where: { id: table.id },
    data: {
      qrCodeUrl: qrCodeUrl?.secure_url || null,
      cloudinaryPublicId: qrCodeUrl?.public_id || null,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "Table creted successfully", updatedTable));
});

export const getAllTables = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, "Bad Request: Missing restaurant ID");
    }

    const tables = await db.tables.findMany({
      where: {
        restaurantId: id,
      },
    });

    if (tables.length === 0) {
      throw new ApiError(404, "Not Found: No tables found for this restaurant");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Tables retrieved successfully", tables));
  }
);

export const deleteTable = asyncHandler(async (req: Request, res: Response) => {
  const { id, role } = req.user ?? { id: null, role: null };

  if (!id || role !== "ADMIN") {
    throw new ApiError(403, "Forbidden: You do not have permission");
  }

  const { tableId } = req.params;
  if (!tableId) {
    throw new ApiError(400, "Bad Request: Missing table ID");
  }

  const table = await db.tables.findUnique({ where: { id: tableId } });
  if (!table) {
    throw new ApiError(404, "Not Found: Table not found");
  }

  if (table.cloudinaryPublicId) {
    await deleteFromCloudinary(table.cloudinaryPublicId);
  }

  await db.tables.delete({ where: { id: tableId } });

  return res
    .status(200)
    .json(new ApiResponse(200, "Table deleted successfully", {}));
});

export const updateTable = asyncHandler(async (req: Request, res: Response) => {
  const { id, role } = req.user ? req.user : { id: null, role: null };

  if (!id || role !== "ADMIN") {
    throw new ApiError(403, "Forbidden: You do not have permission");
  }

  const { tableId } = req.params;
  const { number, capacity } = req.body;
  if (!tableId || !number || !capacity) {
    throw new ApiError(400, "Bad Request: Missing required fields");
  }

  const table = await db.tables.update({
    where: { id: tableId },
    data: {
      number,
      capacity,
    },
  });

  if (!table) {
    throw new ApiError(404, "Not Found: Table not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, "Table updated successfully", table));
});
