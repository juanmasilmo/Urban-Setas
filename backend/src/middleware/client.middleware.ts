import {body, param, validationResult, ValidationChain} from 'express-validator';
import {Request, Response, NextFunction} from 'express';
import isString from './../../node_modules/moment/src/lib/utils/is-string';

export const validateClient: ValidationChain[] = [
    body("clientName") .isString() .withMessage("El nombre del cliente no puede estar vacio") .notEmpty().withMessage("El nombre del cliente no puede estar vacio")

]
