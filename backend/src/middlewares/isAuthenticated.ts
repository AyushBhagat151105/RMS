import { decodeUserType } from "@/types/express";
import { ApiError } from "@/utils/apiError";
import { asyncHandler } from "@/utils/asyncHandler";
import { env } from "@/validators/env";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let { refreshToken } = req.cookies;

    if (!refreshToken) {
      refreshToken = req.headers.authorization?.split(" ")[1];
    }

    if (!refreshToken) {
      return next(new ApiError(403, "No refresh token provided"));
    }

    const { id, role } = jwt.verify(
      refreshToken,
      env.REFRESHTOKEN
    ) as decodeUserType;

    req.user = {
      id: id,
      role: role,
    };

    next();
  }
);
