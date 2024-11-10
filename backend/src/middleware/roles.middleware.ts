// middleware/roles.middleware.ts
import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";
import { Request, Response, NextFunction } from "express"; // Asegúrate de importar NextFunction

// Validar el campo del nombre del rol
export const validateRol: ValidationChain[] = [
  body("rolName")
    .isString()
    .withMessage("Solo admite texto")
    .notEmpty()
    .withMessage("No puede estar vacío"),
];

// Validar el parámetro ID del rol
export const validateRolId: ValidationChain[] = [
  param("rolId")
    .isNumeric()
    .withMessage("No es un número")
    .notEmpty()
    .withMessage("No puede estar vacío"),
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
