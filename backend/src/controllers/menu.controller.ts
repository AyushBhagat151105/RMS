import { db } from "@/db";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { deleteFromCloudinary, uploadOnCloudinary } from "@/utils/cloudinary";
import { Request, Response } from "express";

export const creteMenu = asyncHandler(async (req: Request, res: Response) => {
  const { id, role } = req.user ? req.user : { id: null, role: null };

  if (!id || role !== "ADMIN") {
    throw new ApiError(403, "Forbidden: You do not have permission");
  }

  const { restaurantId, name, description, price, tags } = req.body;
  if (!restaurantId || !name || !description || !price) {
    throw new ApiError(400, "Bad Request: Missing required fields");
  }

  const imageUrl = (req.files as { [fieldname: string]: Express.Multer.File[] })
    ?.imageUrl?.[0]?.path;

  if (!imageUrl) {
    throw new ApiError(400, "Bad Request: Logo file is required");
  }

  const Url = await uploadOnCloudinary(imageUrl);

  const tagsArray = tags.split(",").map((tag: string) => tag.trim());

  const menu = await db.menuItem.create({
    data: {
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      name,
      description,
      price: parseFloat(price),
      available: true,
      tags: tagsArray,
      imageUrl: Url ? Url.secure_url : null,
      cloudinaryPublicId: Url ? Url?.public_id : null,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "Menu item created successfully", menu));
});

export const getMenu = asyncHandler(async (req: Request, res: Response) => {
  const { restaurantId } = req.params;
  if (!restaurantId) {
    throw new ApiError(400, "Bad Request: Missing restaurant ID");
  }

  const menu = await db.menuItem.findMany({
    where: {
      restaurantId: restaurantId,
    },
  });

  if (!menu || menu.length === 0) {
    throw new ApiError(
      404,
      "Not Found: No menu items found for this restaurant"
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Menu items retrieved successfully", menu));
});

export const deleteMenu = asyncHandler(async (req: Request, res: Response) => {
  const { id, role } = req.user ?? { id: null, role: null };

  if (!id || role !== "ADMIN") {
    throw new ApiError(403, "Forbidden: You do not have permission");
  }

  const { menuId } = req.params;
  if (!menuId) {
    throw new ApiError(400, "Bad Request: Missing menu ID");
  }

  const menu = await db.menuItem.findUnique({ where: { id: menuId } });

  if (!menu) {
    throw new ApiError(404, "Not Found: Menu item not found");
  }

  if (menu.cloudinaryPublicId) {
    await deleteFromCloudinary(menu.cloudinaryPublicId);
  }

  await db.menuItem.delete({ where: { id: menuId } });

  return res
    .status(200)
    .json(
      new ApiResponse(200, "Menu item and image deleted successfully", menu)
    );
});

export const updateMenu = asyncHandler(async (req: Request, res: Response) => {
  const { id, role } = req.user ? req.user : { id: null, role: null };

  if (!id || role !== "ADMIN") {
    throw new ApiError(403, "Forbidden: You do not have permission");
  }
  const { menuId } = req.params;
  if (!menuId) {
    throw new ApiError(400, "Bad Request: Missing menu ID");
  }

  const { name, description, price, tags } = req.body;

  const tagsArray = tags.split(",").map((tag: string) => tag.trim());

  const imageUrl = (req.files as { [fieldname: string]: Express.Multer.File[] })
    ?.imageUrl?.[0]?.path;

  if (!imageUrl) {
    throw new ApiError(400, "Bad Request: Logo file is required");
  }

  const Url = await uploadOnCloudinary(imageUrl);

  const menu = await db.menuItem.update({
    where: {
      id: menuId,
    },
    data: {
      name,
      description,
      price: parseFloat(price),
      tags: tagsArray,
      imageUrl: Url ? Url.secure_url : null,
    },
  });

  if (!menu) {
    throw new ApiError(404, "Not Found: Menu item not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Menu item updated successfully", menu));
});

export const toggleMenuAvailability = asyncHandler(
  async (req: Request, res: Response) => {
    const { id, role } = req.user ? req.user : { id: null, role: null };

    if (!id || role !== "ADMIN") {
      throw new ApiError(403, "Forbidden: You do not have permission");
    }
    const { menuId } = req.params;
    if (!menuId) {
      throw new ApiError(400, "Bad Request: Missing menu ID");
    }

    const menu = await db.menuItem.findUnique({
      where: {
        id: menuId,
      },
    });

    if (!menu) {
      throw new ApiError(404, "Not Found: Menu item not found");
    }

    const updatedMenu = await db.menuItem.update({
      where: {
        id: menuId,
      },
      data: {
        available: !menu.available,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          `Menu item availability toggled to ${updatedMenu.available}`,
          updatedMenu
        )
      );
  }
);

export const getMenuByName = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, restaurantId } = req.body;
    if (!name || !restaurantId) {
      throw new ApiError(400, "Bad Request: Missing menu name or restaurantId");
    }

    const menu = await db.menuItem.findFirst({
      where: {
        name: name,
        restaurantId: restaurantId,
      },
    });

    if (!menu) {
      throw new ApiError(404, "Not Found: Menu item not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Menu item retrieved successfully", menu));
  }
);
