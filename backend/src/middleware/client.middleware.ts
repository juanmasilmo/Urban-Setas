import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";

export const validateClient: ValidationChain[] = [
  body("clientName")
    .isString()
    .withMessage("El nombre del cliente no puede estar vacio")
    .notEmpty()
    .withMessage("El nombre del cliente no puede estar vacio"),
  body("clienteId")
    .isNumeric()
    .withMessage("El id solo puede ser numerico")
    .notEmpty()
    .withMessage("no puede estar vacio"),
];
/*export const validateClientID: ValidationChain[] = [
]ver otra validacion despues*/
