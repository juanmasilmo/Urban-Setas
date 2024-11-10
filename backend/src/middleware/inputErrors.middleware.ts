// inputErrors.middleware.ts
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

// Middleware para manejar errores de validación
export const inputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};
