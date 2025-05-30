import { login, logout, register, verifyEmail } from "@/controllers/auth.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { Router } from "express";

export const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/verify-email/:token", verifyEmail);
authRoute.post("/logout", isAuthenticated, logout)
