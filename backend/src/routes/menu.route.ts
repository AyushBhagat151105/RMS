import {
  creteMenu,
  deleteMenu,
  getMenu,
  getMenuByName,
  toggleMenuAvailability,
  updateMenu,
} from "@/controllers/menu.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { upload } from "@/middlewares/multer";
import { Router } from "express";

export const menuRouter = Router();

menuRouter.post(
  "/create-menu",
  isAuthenticated,
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  creteMenu
);
menuRouter.get("/get-menu/:restaurantId", getMenu);
menuRouter.get("/get-menu-by-name", getMenuByName);
menuRouter.post(
  "/chenge-availability/:menuId",
  isAuthenticated,
  toggleMenuAvailability
);
menuRouter.put(
  "/update-menu/:menuId",
  isAuthenticated,
  upload.fields([{ name: "imageUrl", maxCount: 1 }]),
  updateMenu
);
menuRouter.delete("/delete-menu/:menuId", isAuthenticated, deleteMenu);
