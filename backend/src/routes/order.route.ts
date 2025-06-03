import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "@/controllers/order.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { Router } from "express";

export const orderRouter = Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.get("/get-orders/:id", isAuthenticated, getOrderById);
orderRouter.get("/get-all-orders/:id", isAuthenticated, getAllOrders);
orderRouter.put("/update-order/:id", isAuthenticated, updateOrder);
orderRouter.put("/cancel-order/:id", isAuthenticated, createOrder);
