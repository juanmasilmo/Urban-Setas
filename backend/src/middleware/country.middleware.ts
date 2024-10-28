import {body, param, validationResult, ValidationChain} from 'express-validator';

export const validateCountry: ValidationChain[] = [
    body("countryName") .isString() .withMessage("El nombre solo puede contener letras") .notEmpty() .withMessage("Debe completar los datos")
];

export const validateCountryId: ValidationChain[] = [
param("id") .isNumeric() .withMessage("El id debe ser numerico") .notEmpty() .withMessage("Debe completar los campos")
];
