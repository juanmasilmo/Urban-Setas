import { Router } from "express";
import {
  updateStock
} from "../controllers/stock.controller";
import { validateStock } from "../middleware/stock.middleware";
import { inputErrors } from "../middleware/inputErrors.middleware";

const router = Router();

// Ruta para actualizar el stock de un producto
router.put("/:id", validateStock, inputErrors, updateStock);

export default router;
