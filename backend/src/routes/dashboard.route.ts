import {
  getTotalKitchen,
  getTotalOrders,
  getTotalOrdersByStatus,
  getTotalWaiter,
} from "@/controllers/dashboard.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { Router } from "express";

export const dashboardRoute = Router();

dashboardRoute.get(
  "/total-orders/:restaurantId",
  isAuthenticated,
  getTotalOrders
);
dashboardRoute.get(
  "/total-orders-by-status/:restaurantId",
  isAuthenticated,
  getTotalOrdersByStatus
);
dashboardRoute.get(
  "/total-waiter/:restaurantId",
  isAuthenticated,
  getTotalWaiter
);
dashboardRoute.get(
  "/total-kitchen/:restaurantId",
  isAuthenticated,
  getTotalKitchen
);
