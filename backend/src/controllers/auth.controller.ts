import { db } from "@/db";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";
import crypto, { verify } from "crypto";
import { env } from "@/validators/env";
import { ResendMailer } from "@/utils/mail";
import bcrypt from "bcryptjs";

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
  const sendMail = new ResendMailer(email);
  const verificationLink = `${env.FRONTEND_URL}/verify-email/${token}`;
  const html = `<p>Click the link below to verify your email:</p>
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
