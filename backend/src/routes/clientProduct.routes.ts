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
router.post("/client-products", validateClientProduct, createClientProduct);

// Obtener todos los ClientProducts
router.get("/client-products", getClientProducts);

// Obtener un ClientProduct por ID
router.get("/client-products/:id", getClientProductById);

// Actualizar un ClientProduct por ID
router.put("/client-products/:id", validateClientProduct, updateClientProduct);

// Eliminar un ClientProduct por ID
router.delete("/client-products/:id", deleteClientProduct);

export default router;
