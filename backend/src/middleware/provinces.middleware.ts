// middleware/provinces.middleware.ts
import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";
import { Request, Response, NextFunction } from "express"; // Asegúrate de importar NextFunction

// Validar los campos de la provincia
export const validateProvince: ValidationChain[] = [
  body("provinceName")
    .isString()
    .withMessage("Solo se admiten letras")
    .notEmpty()
    .withMessage("Debe completar los campos"),
  body("idCountry")
    .isNumeric()
    .withMessage("Solo número para el ID")
    .notEmpty()
    .withMessage("Debe completar los campos"),
];

// Validar el parámetro ID de la provincia
export const validateProvinceId: ValidationChain[] = [
  param("id")
    .isNumeric()
    .withMessage("Solo se admiten números")
    .notEmpty()
    .withMessage("Debe completar todos los campos"),
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
