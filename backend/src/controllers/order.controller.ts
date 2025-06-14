import { db } from "@/db";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { tableId, items } = req.body;

  if (
    !userId ||
    !tableId ||
    !items ||
    !Array.isArray(items) ||
    items.length === 0
  ) {
    throw new ApiError(400, "Missing or invalid input data");
  }

  let restaurantId: string | null = null;

  let total = 0;

  for (const item of items) {
    if (!item.menuId || !item.quantity || !item.price) {
      throw new ApiError(
        400,
        "Each item must have menuId, quantity, and price"
      );
    }

    const menuItem = await db.menuItem.findUnique({
      where: { id: item.menuId },
    });

    if (!menuItem || !menuItem.available) {
      throw new ApiError(
        404,
        `Menu item ${item.menuId} not found or not available`
      );
    }

    if (!restaurantId) {
      restaurantId = menuItem.restaurantId;
    } else if (restaurantId !== menuItem.restaurantId) {
      throw new ApiError(400, "All items must belong to the same restaurant");
    }

    total += item.price * item.quantity;
  }

  if (!restaurantId) {
    throw new ApiError(400, "Invalid restaurant association");
  }

  const order = await db.orders.create({
    data: {
      userId,
      tableId,
      restaurantId,
      total,
      status: "PENDING",
    },
  });

  const orderItemsData = items.map((item) => ({
    orderId: order.id,
    menuItemId: item.menuId,
    quantity: item.quantity,
    price: item.price,
  }));

  await db.order_Item.createMany({
    data: orderItemsData,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "Order created successfully", {}));
});

export const getOrderById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, "Order ID is required");
    }

    const order = await db.orders.findUnique({
      where: { id: Number(id) },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        table: {
          select: {
            id: true,
            number: true,
            capacity: true,
          },
        },
        Order_Item: {
          include: {
            menuItem: {
              select: {
                id: true,
                name: true,
                price: true,
                imageUrl: true,
              },
            },
          },
        },
        payment: true,
        restaurant: {
          select: {
            id: true,
            name: true,
            address: true,
          },
        },
      },
    });

    if (!order) {
      throw new ApiError(404, "Order not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Order retrieved successfully", order));
  }
);

export const getAllOrders = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const orders = await db.orders.findMany({
      where: { restaurantId: id },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        table: {
          select: {
            id: true,
            number: true,
            capacity: true,
          },
        },
        Order_Item: {
          include: {
            menuItem: {
              select: {
                id: true,
                name: true,
                price: true,
                imageUrl: true,
              },
            },
          },
        },
        payment: true,
        restaurant: {
          select: {
            id: true,
            name: true,
            address: true,
          },
        },
      },
    });

    if (!orders) {
      throw new ApiError(404, "Order not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Order retrieved successfully", orders));
  }
);

export const updateOrder = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, items } = req.body;

  const order = await db.orders.findUnique({ where: { id: Number(id) } });

  if (!order) {
    throw new ApiError(404, "Order not found");
  }

  let updatedTotal = order.total;

  if (items && Array.isArray(items) && items.length > 0) {
    let restaurantId: string | null = null;
    updatedTotal = 0;

    for (const item of items) {
      if (!item.menuId || !item.quantity || !item.price) {
        throw new ApiError(
          400,
          "Each item must have menuId, quantity, and price"
        );
      }

      const menuItem = await db.menuItem.findUnique({
        where: { id: item.menuId },
      });

      if (!menuItem || !menuItem.available) {
        throw new ApiError(
          404,
          `Menu item ${item.menuId} not found or not available`
        );
      }

      if (!restaurantId) {
        restaurantId = menuItem.restaurantId;
      } else if (restaurantId !== menuItem.restaurantId) {
        throw new ApiError(400, "All items must belong to the same restaurant");
      }

      updatedTotal += item.price * item.quantity;
    }

    await db.order_Item.deleteMany({
      where: { orderId: order.id },
    });

    const newItems = items.map((item) => ({
      orderId: order.id,
      menuItemId: item.menuId,
      quantity: item.quantity,
      price: item.price,
    }));

    await db.order_Item.createMany({ data: newItems });
  }

  const updatedOrder = await db.orders.update({
    where: { id: Number(id) },
    data: {
      status,
      total: updatedTotal,
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Order updated successfully", updatedOrder));
});

export const cancelOrder = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const order = await db.orders.findUnique({ where: { id: Number(id) } });

  if (!order) {
    throw new ApiError(404, "Order not found");
  }

  if (order.status === "IN_PROGRESS" || order.status === "COMPLETED") {
    throw new ApiError(400, `Cannot cancel an order in ${order.status}`);
  }

  const cancelledOrder = await db.orders.update({
    where: { id: Number(id) },
    data: {
      status: "CANCELLED",
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Order cancelled successfully", cancelledOrder));
});

export const getOrderStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, "id is required");
    }

    const status = await db.orders.findUnique({
      where: { id: Number(id) },
      select: {
        status: true,
      },
    });
  }
);
