import {
  getUserProfile,
  login,
  logout,
  register,
  resetPassword,
  updatePassword,
  updateUserAvatar,
  updateUserProfile,
  verifyEmail,
} from "@/controllers/auth.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { upload } from "@/middlewares/multer";
import { Router } from "express";

export const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/verify-email/:token", verifyEmail);
authRoute.post("/logout", isAuthenticated, logout);
authRoute.put(
  "/update-avatar",
  isAuthenticated,
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  updateUserAvatar
);
authRoute.put("/update-profile", isAuthenticated, updateUserProfile);
authRoute.get("/me", isAuthenticated, getUserProfile);
authRoute.post("/reset-password", isAuthenticated, resetPassword);
authRoute.post("/reset-password/:token", isAuthenticated, updatePassword);
