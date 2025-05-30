import { db } from "@/db";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";
import crypto, { verify } from "crypto";
import { env } from "@/validators/env";
import bcrypt from "bcryptjs";
import { generateAccessTokenAndRefreshToken } from "@/utils/jwtToken";
import { options } from "@/utils/cookiesOptions";
import { MailtrapMailer } from "@/utils/mail";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password, username, fullName } = req.body;

  const existingUser = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    throw new ApiError(500, "User already exists with this email");
  }

  const token = await crypto.randomBytes(32).toString("hex");
  const sendMail = new MailtrapMailer(email);
  const verificationLink = `${env.FRONTEND_URL}/verify-email/${token}`;
  const html = `<p>Click the link below to verify your email:</p>
  <p>${verificationLink}</p>
    <a href="${verificationLink}">Verify Email</a>`;

  await sendMail.sendMail({
    subject: "Verify your email",
    html: html,
  });

  const hashedPassword = await bcrypt.hash(password, 10);

  const createUser = await db.user.create({
    data: {
      email: email,
      password: hashedPassword,
      username: username,
      fullName: fullName,
      verificationToken: token,
      verificationTokenExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  });
  if (!createUser) {
    throw new ApiError(500, "Something went wrong while creating user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "user created successfully", {}));
});

export const verifyEmail = asyncHandler(async (req: Request, res: Response) => {
  const { token } = req.params;

  const user = await db.user.findFirst({
    where: {
      verificationToken: token,
      verificationTokenExpiry: {
        gte: new Date(),
      },
    },
  });

  if (!user) {
    throw new ApiError(400, "Invalid or expired verification token");
  }

  await db.user.update({
    where: { id: user.id },
    data: {
      isVerified: true,
      verificationToken: null,
      verificationTokenExpiry: null,
    },
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Email verified successfully", {}));
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await db.user.findFirst({
    where: {
      email: email,
      isVerified: true,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found or email not verified");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user.id, user.role);

  if (!accessToken || !refreshToken) {
    throw new ApiError(500, "Failed to generate tokens");
  }

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      accessToken: accessToken,
    },
  });

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, "Login successful", {}));
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    throw new ApiError(401, "Unauthorized");
  }

  await db.user.update({
    where: { id: userId },
    data: { accessToken: null },
  });

  return res
    .status(200)
    .clearCookie("refreshToken")
    .json(new ApiResponse(200, "Logout successful", {}));
});
