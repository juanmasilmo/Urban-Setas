// middlewares/cityMiddleware.ts
import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";

// Middleware para validar la creación y actualización de ciudades
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

// Middleware para validar el ID de la ciudad en rutas específicas
export const validateCityId: ValidationChain[] = [
  param("id")
    .isNumeric()
    .withMessage("El ID debe ser un número")
    .notEmpty()
    .withMessage("El ID no puede estar vacío"),
];
