// routes/auth.routes.ts
import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { inputErrors } from "../middleware/inputErrors.middleware";
import { check } from "express-validator";

const router = Router();

// Validaciones para el registro de usuario
const registerValidation = [
  check("userName").notEmpty().withMessage("Nombre de usuario es requerido"),
  check("email").isEmail().withMessage("Email inválido"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];

router.post("/register", registerValidation, inputErrors, register); // Ruta para registro
router.post("/login", login); // Ruta para login

export default router;
