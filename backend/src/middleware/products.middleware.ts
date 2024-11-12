//middleware/products.middleware.ts
import {
  body,
  param,
  validationResult,
  ValidationChain,
  Result,
} from "express-validator";
import { Request, Response, NextFunction } from "express";

//validar campos de productos
export const validateProduct: ValidationChain[] = [
  body("productName")
    .isString()
    .withMessage("debe ser texto")
    .notEmpty()
    .withMessage("no puede estar vacio"),
  body("productId")
    .isNumeric()
    .withMessage("el id solo debe ser numerico")
    .notEmpty()
    .withMessage("No puede estar vacio"),
];
//validar campos de productos
export const checkValidationResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  next();
};
