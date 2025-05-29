import "dotenv/config";
import { env } from "@/validators/env";
import express from "express";
import app from "./app";
import connectDB from "./lib/connectDB.lib";

const PORT = env.PORT ?? 8080;

connectDB().then(() =>
  app.listen(PORT, () => {
    console.log(`server running on ${env.BASEURL}:${PORT}`);
  })
);
