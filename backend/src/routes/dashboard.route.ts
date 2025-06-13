import {
  getTotalKitchen,
  getTotalOrders,
  getTotalOrdersByStatus,
  getTotalWaiter,
} from "@/controllers/dashboard.controller";
import { Router } from "express";

export const dashboardRoute = Router();

dashboardRoute.get("/total-orders/:restaurantId", getTotalOrders);
dashboardRoute.get(
  "/total-orders-by-status/:restaurantId",
  getTotalOrdersByStatus
);
dashboardRoute.get("/total-waiter/:restaurantId", getTotalWaiter);
dashboardRoute.get("/total-kitchen/:restaurantId", getTotalKitchen);
