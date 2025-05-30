import express from "express";

export interface decodeUserType {
  id: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: decodeUserType;
    }
  }
}
