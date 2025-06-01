import {
  createTable,
  deleteTable,
  getAllTables,
  updateTable,
} from "@/controllers/table.controller";
import { isAuthenticated } from "@/middlewares/isAuthenticated";
import { Router } from "express";

export const tableRouter = Router();

tableRouter.post("/create", isAuthenticated, createTable);
tableRouter.get("/get-all-table/:id", isAuthenticated, getAllTables);
tableRouter.delete("/delete/:tableId", isAuthenticated, deleteTable);
tableRouter.put("/update/:tableId", isAuthenticated, updateTable);
