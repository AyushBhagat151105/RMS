import "dotenv/config";
import { env } from "@/validators/env";
import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import app from "./app";
import connectDB from "./lib/connectDB.lib";

const PORT = env.PORT ?? 8080;

const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});


io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

app.set("io", io);


connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`🚀 Server running on ${env.BASEURL}:${PORT}`);
  });
});
