import {
  createRestaurant,
  deleteRestaurant,
  getRestaurantById,
  getRestaurants,
  updateRestaurant,
} from "@/controllers/restaurant.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { Router } from "express";

export const restaurantRouter = Router();

restaurantRouter.post("/create-restaurant", isAuthenticated, createRestaurant);
restaurantRouter.get("/get-restaurants", isAuthenticated, getRestaurants);
restaurantRouter.get(
  "/get-restaurants-by-id/:id",
  isAuthenticated,
  getRestaurantById
);
restaurantRouter.put(
  "/update-restaurant/:id",
  isAuthenticated,
  updateRestaurant
);
restaurantRouter.delete(
  "/delete-restaurant/:id",
  isAuthenticated,
  deleteRestaurant
);
