//cities.routes.ts
import { Router } from "express";
import {
  getAllCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity,
} from "../controllers/cities.controller";
import { check } from "express-validator";

const router = Router();

router.get("/", getAllCities); // Obtener todas las ciudades
router.post(
  "/",
  [check("cityName").notEmpty().withMessage("El nombre es obligatorio")],
  createCity
); // Crear una ciudad
router.put(
  "/:id",
  [
    check("cityName")
      .optional()
      .notEmpty()
      .withMessage("El nombre no puede estar vacío"),
  ],
  updateCity
); // Actualizar una ciudad por ID
router.delete("/:id", deleteCity); // Soft delete de una ciudad por ID

export default router;
