
// middleware/clients.middleware.ts
import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";
import { Request, Response, NextFunction } from "express"; // Asegúrate de importar NextFunction

// Validar los campos del cliente
export const validateClient: ValidationChain[] = [
  body("clientName")
    .isString()
    .withMessage("El nombre del cliente debe ser una cadena")
    .notEmpty()
    .withMessage("El nombre del cliente no puede estar vacío"),
  body("clientId") // Cambié 'clienteId' a 'clientId' para mantener la coherencia
    .isNumeric()
    .withMessage("El ID del cliente debe ser un número")
    .notEmpty()
    .withMessage("El ID del cliente no puede estar vacío"),
];

// Validar el resultado de las validaciones
export const checkValidationResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Retornar errores de validación si existen
  }
  next(); // Continuar con el siguiente middleware si no hay errores
};
