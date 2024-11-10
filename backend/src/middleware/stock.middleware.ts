// stock.middleware.ts
import { body } from "express-validator";

// Validaciones para los campos del stock
export const validateStock = [
  body("productId")
    .isInt()
    .withMessage("El productId debe ser un número entero"),
  body("quantity")
    .isInt({ gt: 0 })
    .withMessage("La cantidad debe ser un número entero positivo"),
];
