// middleware/clientProduct.middleware.ts
import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

// Validar los campos del producto del cliente
export const validateClientProduct = [
  body("clientId").isInt().withMessage("El clientId debe ser un número entero"), // Validar que clientId sea un número entero
  body("productId")
    .isInt()
    .withMessage("El productId debe ser un número entero"), // Validar que productId sea un número entero
  body("quantity").isInt().withMessage("La cantidad debe ser un número entero"), // Validar que quantity sea un número entero
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Retornar errores de validación si existen
    }
    next(); // Continuar con el siguiente middleware si no hay errores
  },
];
