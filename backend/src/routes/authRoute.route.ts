import { login, register, verifyEmail } from "@/controllers/auth.controller";
import { Router } from "express";

export const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/verify-email/:token", verifyEmail);
