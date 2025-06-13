import express, { Express } from "express";
import cors from "cors";
import { env } from "./validators/env";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json";
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Routes
import { authRoute } from "./routes/authRoute.route";
import { restaurantRouter } from "./routes/restaurant.route";
import { tableRouter } from "./routes/table.route";
import { menuRouter } from "./routes/menu.route";
import { orderRouter } from "./routes/order.route";
import { staffRouter } from "./routes/staff.route";
import { dashboardRoute } from "./routes/dashboard.route";

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/restaurant", restaurantRouter);
app.use("/api/v1/table", tableRouter);
app.use("/api/v1/menu", menuRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/staff", staffRouter);
app.use("/api/v1/dashboard", dashboardRoute);

app.get("/", (req, res) => {
  res.status(200).json("It is up and running...");
});

export default app;
