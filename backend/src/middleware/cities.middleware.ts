// middleware/cities.middleware.ts
import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";

// Validar los campos de la ciudad
export const validateCity: ValidationChain[] = [
  body("cityName")
    .isString()
    .withMessage("El nombre de la ciudad debe ser una cadena")
    .notEmpty()
    .withMessage("El nombre de la ciudad no puede estar vacío"),
  body("idProvince")
    .isNumeric()
    .withMessage("El ID de la provincia debe ser un número")
    .notEmpty()
    .withMessage("El ID de la provincia no puede estar vacío"),
];

// Validar el parámetro ID
export const validateCityId: ValidationChain[] = [
  param("id")
    .isNumeric()
    .withMessage("El ID debe ser un número")
    .notEmpty()
    .withMessage("El ID no puede estar vacío"),
];
