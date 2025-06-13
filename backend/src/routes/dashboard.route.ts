import { getTotalOrders, getTotalOrdersByStatus } from "@/controllers/dashboard.controller";
import { Router } from "express";

export const dashboardRoute = Router();

dashboardRoute.get("/total-orders/:restaurantId", getTotalOrders);
dashboardRoute.get("/total-orders-by-status/:restaurantId", getTotalOrdersByStatus);