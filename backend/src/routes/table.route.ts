import { createTable, getAllTables } from "@/controllers/table.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { upload } from "@/middlewares/multer";
import { Router } from "express";

export const tableRouter = Router();

tableRouter.post("/create", isAuthenticated, createTable);
tableRouter.get("/get-all-table/:id", isAuthenticated, getAllTables);
