import {
  body,
  param,
  validationResult,
  ValidationChain,
} from "express-validator";

export const validateProvince: ValidationChain[] = [
  body("provinceName")
    .isString()
    .withMessage("Solo se admiten letras")
    .notEmpty()
    .withMessage("Debe completar los campos"),
  body("idCountry")
    .isNumeric()
    .withMessage("Solo numero para el ID")
    .notEmpty()
    .withMessage("Debe completar los campos"),
];

export const validateProvinceId: ValidationChain[] = [
  param("id")
    .isNumeric()
    .withMessage("Solo se admiten numeros")
    .notEmpty()
    .withMessage("Debe completar todos los campos"),
];
