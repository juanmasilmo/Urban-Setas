import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";

// Validar los campos del producto del cliente
export const validateClientProduct: RequestHandler[] = [
  body("clientId").isInt().withMessage("El clientId debe ser un número entero"),
  body("productId")
    .isInt()
    .withMessage("El productId debe ser un número entero"),
  body("quantitySold")
    .isInt()
    .withMessage("La cantidad vendida debe ser un número entero"),
  body("date")
    .optional()
    .isISO8601()
    .withMessage("La fecha debe tener un formato válido (ISO 8601)"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      next();
    }
  },
];
