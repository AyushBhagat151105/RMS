import {
  createOrder,
  getAllOrders,
  getOrderById,
} from "@/controllers/order.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { Router } from "express";

export const orderRouter = Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.get("/get-orders/:id", isAuthenticated, getOrderById);
orderRouter.get("/get-all-orders/:id", isAuthenticated, getAllOrders);
