import { db } from "@/db";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";

export const getTotalOrders = asyncHandler(
  async (req: Request, res: Response) => {
    const restaurantId = req.params.restaurantId;

    if (!restaurantId) throw new ApiError(400, "Restaurant id is required");

    const order = await db.orders.count({
      where: {
        restaurantId: restaurantId,
      },
    });

    if (!order) throw new ApiError(404, "No orders found");

    res.status(200).json(new ApiResponse(200, "orders count", order));
  }
);

export const getTotalOrdersByStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const restaurantId = req.params.restaurantId;

    if (!restaurantId) throw new ApiError(400, "Restaurant id is required");

    const order = await db.orders.groupBy({
      where: {
        restaurantId: restaurantId,
      },
      by: ["status"],
    });

    if (!order) throw new ApiError(404, "No orders found");

    res.status(200).json(new ApiResponse(200, "orders count", order));
  }
);
