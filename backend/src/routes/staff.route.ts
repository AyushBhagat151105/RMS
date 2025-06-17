import {
  createKitchen,
  createWaiter,
  deleteKitchen,
  deleteWaiter,
  getAllKitchens,
  getAllWaiters,
  getKitchenById,
  getWaiterById,
  loginKitchen,
  loginWaiter,
  logoutKitchen,
  logoutWaiter,
  updateKitchen,
  updateWaiter,
} from "@/controllers/staff.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { Router } from "express";

export const staffRouter = Router();

// Waiter Routes
staffRouter.post("/create-waiter", isAuthenticated, createWaiter);
staffRouter.post("/login-waiter", loginWaiter);
staffRouter.post("/logout-waiter", isAuthenticated, logoutWaiter);
staffRouter.put("/update-waiter/:id", isAuthenticated, updateWaiter);
staffRouter.delete("/delete-waiter/:id", isAuthenticated, deleteWaiter);
staffRouter.get(
  "/get-all-waiters/:restaurantId",
  isAuthenticated,
  getAllWaiters
);
staffRouter.get("/get-waiter/:id", isAuthenticated, getWaiterById);

// Kitchen Routes
staffRouter.post("/create-kitchen", isAuthenticated, createKitchen);
staffRouter.post("/login-kitchen", loginKitchen);
staffRouter.post("/logout-kitchen", isAuthenticated, logoutKitchen);
staffRouter.put("/update-kitchen/:id", isAuthenticated, updateKitchen);
staffRouter.delete("/delete-kitchen/:id", isAuthenticated, deleteKitchen);
staffRouter.get(
  "/get-all-kitchen/:restaurantId",
  isAuthenticated,
  getAllKitchens
);
staffRouter.get("/get-kitchen/:id", isAuthenticated, getKitchenById);
