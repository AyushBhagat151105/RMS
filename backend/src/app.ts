import express, { Express } from "express";
import cors from "cors";
import { env } from "./validators/env";
import cookieParser from "cookie-parser";
const app: Express = express();

app.use(
  cors({
    origin: env.FRONTEND_URL,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
import { authRoute } from "./routes/authRoute.route";
import { restaurantRouter } from "./routes/restaurant.route";
import { tableRouter } from "./routes/table.route";

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/table", tableRouter);

app.get("/", (req, res) => {
  res.status(200).json("It is up and running...");
});

export default app;
