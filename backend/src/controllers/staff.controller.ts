import { db } from "@/db";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateAccessTokenAndRefreshToken } from "@/utils/jwtToken";
import { options } from "@/utils/cookiesOptions";

export const createWaiter = asyncHandler(
  async (req: Request, res: Response) => {
    const { fullName, email, password, restaurantId } = req.body;
    const role = req.user?.role;
    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }
    if (!fullName || !email || !password || !restaurantId) {
      throw new ApiError(400, "All fields are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const waiter = await db.waiter.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
      },
    });

    if (!waiter) {
      throw new ApiError(400, "File to crete waiter");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, "Waiter created successfully", waiter));
  }
);

export const createKitchen = asyncHandler(
  async (req: Request, res: Response) => {
    const { fullName, email, password, restaurantId } = req.body;
    const role = req.user?.role;
    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }
    if (!fullName || !email || !password || !restaurantId) {
      throw new ApiError(400, "All fields are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const kitchen = await db.kitchen.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
      },
    });

    if (!kitchen) {
      throw new ApiError(400, "File to crete kitchen");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, "Kitchen created successfully", kitchen));
  }
);

export const loginWaiter = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const waiter = await db.waiter.findFirst({
    where: {
      email: email,
    },
  });
  if (!waiter) {
    throw new ApiError(404, "Waiter not found");
  }
  const isPasswordValid = await bcrypt.compare(password, waiter.password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(waiter.id, waiter.role);

  if (!accessToken || !refreshToken) {
    throw new ApiError(500, "Failed to generate tokens");
  }

  const profile = await db.waiter.update({
    where: {
      id: waiter.id,
    },
    data: {
      accessToken: accessToken,
    },
    select: {
      id: true,
      email: true,
      fullName: true,
      avatar: true,
      role: true,
      restaurantId: true,
    },
  });

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, "Login successfull", profile));
});

export const loginKitchen = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const kitchen = await db.kitchen.findFirst({
      where: {
        email: email,
      },
    });
    if (!kitchen) {
      throw new ApiError(404, "Waiter not found");
    }
    const isPasswordValid = await bcrypt.compare(password, kitchen.password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid password");
    }

    const { accessToken, refreshToken } =
      await generateAccessTokenAndRefreshToken(kitchen.id, kitchen.role);

    if (!accessToken || !refreshToken) {
      throw new ApiError(500, "Failed to generate tokens");
    }

    const profile = await db.kitchen.update({
      where: {
        id: kitchen.id,
      },
      data: {
        accessToken: accessToken,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        avatar: true,
        role: true,
        restaurantId: true,
      },
    });

    return res
      .status(200)
      .cookie("refreshToken", refreshToken, options)
      .json(new ApiResponse(200, "Login successfull", profile));
  }
);

export const logoutWaiter = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Unauthorized");
    }

    await db.waiter.update({
      where: { id: userId },
      data: { accessToken: null },
    });

    return res
      .status(200)
      .clearCookie("refreshToken")
      .json(new ApiResponse(200, "Logout successful", {}));
  }
);

export const logoutKitchen = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Unauthorized");
    }

    await db.kitchen.update({
      where: { id: userId },
      data: { accessToken: null },
    });

    return res
      .status(200)
      .clearCookie("refreshToken")
      .json(new ApiResponse(200, "Logout successful", {}));
  }
);

export const updateWaiter = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;

    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }
    const id = req.params.id;
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      throw new ApiError(400, "All fields are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const waiter = await db.waiter.update({
      where: {
        id: id,
      },
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    if (!waiter) {
      throw new ApiError(400, "File to crete waiter");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, "Waiter updated successfully", waiter));
  }
);

export const updateKitchen = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;

    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }
    const id = req.params.id;
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      throw new ApiError(400, "All fields are required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const kitchen = await db.kitchen.update({
      where: {
        id: id,
      },
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    if (!kitchen) {
      throw new ApiError(400, "File to crete kitchen");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, "Waiter updated successfully", kitchen));
  }
);

export const deleteWaiter = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const role = req.user?.role;

    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }

    await db.waiter.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json(new ApiResponse(200, "Waiter deleted", {}));
  }
);

export const deleteKitchen = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const role = req.user?.role;

    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }

    await db.kitchen.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json(new ApiResponse(200, "kitchen deleted", {}));
  }
);

export const getAllWaiters = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;
    const restaurantId = req.params.restaurantId;
    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }

    if (!restaurantId) {
      throw new ApiError(400, "Restaurant ID is required");
    }

    const waiters = await db.waiter.findMany({
      where: {
        restaurantId: restaurantId,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        avatar: true,
        role: true,
      },
    });

    if (!waiters) {
      throw new ApiError(400, "No waiter at");
    }

    

    return res
      .status(200)
      .json(new ApiResponse(200, "Waiters findeds", waiters));
  }
);

export const getAllKitchens = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;
    const restaurantId = req.params.restaurantId;
    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }

    if (!restaurantId) {
      throw new ApiError(400, "Restaurant ID is required");
    }

    const kitchen = await db.kitchen.findMany({
      where: {
        restaurantId: restaurantId,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        avatar: true,
        role: true,
      },
    });

    if (!kitchen) {
      throw new ApiError(400, "No kitchen at");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "kitchen findeds", kitchen));
  }
);

export const getWaiterById = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;
    const id = req.params.id;
    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }
    if (!id) {
      throw new ApiError(400, "Waiter id missing");
    }

    const waiter = await db.waiter.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        avatar: true,
        role: true,
      },
    });
    if (!waiter) {
      throw new ApiError(400, "Not found");
    }

    return res.status(200).json(new ApiResponse(200, "Waiter found", waiter));
  }
);

export const getKitchenById = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;
    const id = req.params.id;
    if (role !== "ADMIN") {
      throw new ApiError(403, "Unauthorized");
    }
    if (!id) {
      throw new ApiError(400, "Kitchen id missing");
    }

    const kitchen = await db.kitchen.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        avatar: true,
        role: true,
      },
    });
    if (!kitchen) {
      throw new ApiError(400, "Not found");
    }

    return res.status(200).json(new ApiResponse(200, "kitchen found", kitchen));
  }
);
