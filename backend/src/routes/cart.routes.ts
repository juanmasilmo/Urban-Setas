// routes/cart.routes.ts
import { Router } from "express";
import { addToCart, getCart } from "../controllers/cart.controller";

const router = Router();

router.post("/add", addToCart); // Agregar producto al carrito
router.get("/:clientId", getCart); // Ver carrito de un cliente

export default router;
