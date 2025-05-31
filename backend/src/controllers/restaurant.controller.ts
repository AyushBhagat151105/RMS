import { db } from "@/db";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";

export const createRestaurant = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;
    const id = req.user?.id;

    if (!id) {
      throw new ApiError(401, "Unauthorized: User ID is missing");
    }

    if (role !== "ADMIN") {
      throw new ApiError(403, "Forbidden: You do not have permission");
    }

    const { name, description, address, phone, email } = req.body;

    if (!name || !description || !address || !phone || !email) {
      throw new ApiError(400, "Bad Request: Missing required fields");
    }

    const newRestaurant = await db.restaurants.create({
      data: {
        name,
        description,
        address,
        phone,
        email,
        userId: id,
      },
    });

    if (!newRestaurant) {
      throw new ApiError(
        500,
        "Internal Server Error: Could not create restaurant"
      );
    }

    return res
      .status(201)
      .json(
        new ApiResponse(201, "Restaurant created successfully", newRestaurant)
      );
  }
);

export const getRestaurants = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.user?.id;
    const role = req.user?.role;

    if (role !== "ADMIN") {
      throw new ApiError(403, "Forbidden: You do not have permission");
    }

    const restaurants = await db.restaurants.findMany({
      where: {
        userId: id,
      },
    });

    if (!restaurants || restaurants.length === 0) {
      throw new ApiError(404, "No restaurants found for this user");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, "Restaurants retrieved successfully", restaurants)
      );
  }
);

export const getRestaurantById = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;

    const id = req.params.id;

    if (role !== "ADMIN") {
      throw new ApiError(403, "Forbidden: You do not have permission");
    }
    if (!id) {
      throw new ApiError(400, "Bad Request: Restaurant ID is required");
    }

    const restaurant = await db.restaurants.findUnique({
      where: { id },
    });

    if (!restaurant) {
      throw new ApiError(404, "Restaurant not found");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, "Restaurant retrieved successfully", restaurant)
      );
  }
);

export const updateRestaurant = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;

    const id = req.params.id;

    if (role !== "ADMIN") {
      throw new ApiError(403, "Forbidden: You do not have permission");
    }
    const { name, description, address, phone, email } = req.body;

    if (!id) {
      throw new ApiError(400, "Bad Request: Restaurant ID is required");
    }

    const updatedRestaurant = await db.restaurants.update({
      where: { id },
      data: {
        name,
        description,
        address,
        phone,
        email,
      },
    });

    if (!updatedRestaurant) {
      throw new ApiError(404, "Restaurant not found");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "Restaurant updated successfully",
          updatedRestaurant
        )
      );
  }
);

export const deleteRestaurant = asyncHandler(
  async (req: Request, res: Response) => {
    const role = req.user?.role;

    const id = req.params.id;

    if (role !== "ADMIN") {
      throw new ApiError(403, "Forbidden: You do not have permission");
    }
    if (!id) {
      throw new ApiError(400, "Bad Request: Restaurant ID is required");
    }

    const deletedRestaurant = await db.restaurants.delete({
      where: { id },
    });

    if (!deletedRestaurant) {
      throw new ApiError(404, "Restaurant not found");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, "Restaurant deleted successfully", deletedRestaurant)
      );
  }
);
