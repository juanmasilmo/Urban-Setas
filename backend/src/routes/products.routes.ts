import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
} from "../controllers/products.controller";

const router = Router();

router.get("/", getAllProducts); // Obtener todos los productos
router.post("/", createProduct); // Crear un producto
router.get("/:id", getProductById); // Obtener un producto por ID

export default router;
