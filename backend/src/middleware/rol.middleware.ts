import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";

export const validateRol: ValidationChain[] = [
  body("rolName")
    .isString()
    .withMessage("Solo admite texto")
    .notEmpty()
    .withMessage("No puede estar vacio"),
];

export const validateRolId: ValidationChain[] = [
    param("rolId") .isNumeric().withMessage("No es un numero")  .notEmpty().withMessage("No puede estar vacio"),
];
