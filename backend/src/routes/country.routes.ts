import { Router } from "express";
import {
  createCountry,
  deleteCountry,
  getCountries,
  getCountryById,
  updateCountry,
} from "../controllers/country.controller";
import {
  validateCountry,
  validateCountryId,
} from "../middleware/country.middleware";
import { inputErrors } from "../middleware/inputErrors.middleware";

const router = Router();
router.post("/", validateCountry, inputErrors, createCountry);
router.get("/", getCountries);
router.get("/:id", validateCountryId, inputErrors, getCountryById);
router.put(
  "/:id",
  validateCountryId,
  inputErrors,
  validateCountry,
  inputErrors,
  updateCountry
);
router.delete("/:id", validateCountryId, inputErrors, deleteCountry);

export default router;
