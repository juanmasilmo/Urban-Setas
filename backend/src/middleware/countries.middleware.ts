// middleware/countries.middleware.ts
import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";
import { Request, Response, NextFunction } from "express"; // Asegúrate de importar NextFunction

// Validar el campo del nombre del país
export const validateCountry: ValidationChain[] = [
  body("countryName")
    .isString()
    .withMessage("El nombre del país debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El nombre del país no puede estar vacío"),
];

// Validar el parámetro ID del país
export const validateCountryId: ValidationChain[] = [
  param("id")
    .isNumeric()
    .withMessage("El ID del país debe ser un número")
    .notEmpty()
    .withMessage("El ID del país no puede estar vacío"),
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
