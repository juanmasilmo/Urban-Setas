import { Router } from "express";
import {
  createClientProduct,
  getClientProducts,
  getClientProductById,
  updateClientProduct,
  deleteClientProduct,
} from "../controllers/clientProduct.controller";
import { validateClientProduct } from "../middleware/clientProduct.middleware";

const router = Router();

// Crear un nuevo ClientProduct
router.post("/", validateClientProduct, createClientProduct);

// Obtener todos los ClientProducts
router.get("/", getClientProducts);

// Obtener un ClientProduct por ID
router.get("/:id", getClientProductById);

// Actualizar un ClientProduct por ID
router.put("/:id", validateClientProduct, updateClientProduct);

// Eliminar un ClientProduct por ID
router.delete("/:id", deleteClientProduct);

export default router;
