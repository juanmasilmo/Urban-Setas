import{Request, Response, NextFunction} from "express";
import{validationResult} from "express-validator";

export const inputErrors = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return; // Asegura que `next()` no se ejecute si hay errores
    }
    next(); // Llama al siguiente middleware si no hay errores
  };