import { db } from "@/db";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response } from "express";
import crypto from "crypto";
import { env } from "@/validators/env";
import bcrypt from "bcryptjs";
import { generateAccessTokenAndRefreshToken } from "@/utils/jwtToken";
import { options } from "@/utils/cookiesOptions";
import { MailtrapMailer } from "@/utils/mail";
import { uploadOnCloudinary } from "@/utils/cloudinary";

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

  // const token = await crypto.randomBytes(32).toString("hex");
  // const sendMail = new MailtrapMailer(email);
  // const verificationLink = `${env.FRONTEND_URL}/verify-email/${token}`;
  // const html = `<p>Click the link below to verify your email:</p>
  // <p>${verificationLink}</p>
  //   <a href="${verificationLink}">Verify Email</a>`;

  // await sendMail.sendMail({
  //   subject: "Verify your email",
  //   html: html,
  // });

  const hashedPassword = await bcrypt.hash(password, 10);

  const createUser = await db.user.create({
    data: {
      email: email,
      password: hashedPassword,
      username: username,
      fullName: fullName,
      isVerified: true,
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

  const profile = await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      accessToken: accessToken,
    },
    select: {
      id: true,
      email: true,
      username: true,
      fullName: true,
      isVerified: true,
      avatar: true,
      role: true,
    },
  });

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, "Login successful", profile));
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    throw new ApiError(401, "Unauthorized");
  }

  let found = false;

  // Try User
  const user = await db.user.findUnique({ where: { id: userId } });
  if (user) {
    await db.user.update({
      where: { id: userId },
      data: { accessToken: null },
    });
    found = true;
  }

  // Try Waiter
  if (!found) {
    const waiter = await db.waiter.findUnique({ where: { id: userId } });
    if (waiter) {
      await db.waiter.update({
        where: { id: userId },
        data: { accessToken: null },
      });
      found = true;
    }
  }

  // Try Kitchen
  if (!found) {
    const kitchen = await db.kitchen.findUnique({ where: { id: userId } });
    if (kitchen) {
      await db.kitchen.update({
        where: { id: userId },
        data: { accessToken: null },
      });
      found = true;
    }
  }

  if (!found) {
    throw new ApiError(404, "User not found in any role");
  }

  return res
    .status(200)
    .clearCookie("refreshToken")
    .json(new ApiResponse(200, "Logout successful", {}));
});

export const resetPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { email } = req.body;

    const user = await db.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const token = await crypto.randomBytes(32).toString("hex");
    const sendMail = new MailtrapMailer(email);
    const resetLink = `${env.FRONTEND_URL}/reset-password/${token}`;
    const html = `<p>Click the link below to reset your password:</p>
  <p>${resetLink}</p>
    <a href="${resetLink}">Reset Password</a>`;

    await sendMail.sendMail({
      subject: "Reset your password",
      html: html,
    });

    await db.user.update({
      where: { id: user.id },
      data: {
        resetToken: token,
        resetTokenExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "Reset password link sent to your email", {}));
  }
);

export const updatePassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    const user = await db.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gte: new Date(),
        },
      },
    });

    if (!user) {
      throw new ApiError(400, "Invalid or expired reset token");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return res
      .status(200)
      .json(new ApiResponse(200, "Password updated successfully", {}));
  }
);

export const getUserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
      throw new ApiError(401, "Unauthorized");
    }

    let profile: {
      id: string;
      username: string | null;
      fullName: string;
      email: string;
      avatar: string | null;
      role: string;
      isVerified: boolean;
      restaurantId?: string | null;
    } | null = null;

    // Try User
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        isVerified: true,
        avatar: true,
        role: true,
      },
    });

    if (user) {
      profile = user;
    }

    // Try Waiter
    if (!profile) {
      const waiter = await db.waiter.findUnique({
        where: { id: userId },
        select: {
          id: true,
          fullName: true,
          email: true,
          avatar: true,
          role: true,
          restaurantId: true,
        },
      });

      if (waiter) {
        profile = {
          ...waiter,
          username: null,
          isVerified: false,
        };
      }
    }

    // Try Kitchen
    if (!profile) {
      const kitchen = await db.kitchen.findUnique({
        where: { id: userId },
        select: {
          id: true,
          fullName: true,
          email: true,
          avatar: true,
          role: true,
          restaurantId: true,
        },
      });

      if (kitchen) {
        profile = {
          ...kitchen,
          username: null,
          isVerified: false,
        };
      }
    }

    if (!profile) {
      throw new ApiError(404, "User not found in any role");
    }

    return res
      .status(200)
      .json(
        new ApiResponse(200, "User profile retrieved successfully", profile)
      );
  }
);

export const updateUserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
      throw new ApiError(401, "Unauthorized");
    }

    const { username, fullName } = req.body;

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: {
        username: username,
        fullName: fullName,
      },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        isVerified: true,
        avatar: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(200, "User profile updated successfully", updatedUser)
      );
  }
);

export const updateUserAvatar = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) {
      throw new ApiError(401, "Unauthorized");
    }

    const avatar = (req.files as { [fieldname: string]: Express.Multer.File[] })
      ?.avatar?.[0]?.path;

    if (!avatar) {
      throw new ApiError(400, "Avatar file is required");
    }

    const avatarURL = await uploadOnCloudinary(avatar);

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: {
        avatar: avatarURL ? avatarURL.secure_url : null,
      },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        isVerified: true,
        avatar: true,
      },
    });

    return res
      .status(200)
      .json(
        new ApiResponse(200, "User avatar updated successfully", updatedUser)
      );
  }
);
