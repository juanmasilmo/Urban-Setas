import { Router } from "express";
import {
  createProvince,
  deleteProvince,
  getAllProvinces,
  getProvinceById,
  updateProvince,
} from "../controllers/provinces.controller";
import {
  validateProvince,
  validateProvinceId,
} from "../middleware/provinces.middleware";
import { inputErrors } from "../middleware/inputErrors.middleware";

const router = Router();

router.post("/", validateProvince, inputErrors, createProvince);
router.get("/", getAllProvinces);
router.get("/:id", validateProvinceId, inputErrors, getProvinceById);
router.put(
  "/:id",
  validateProvinceId,
  inputErrors,
  validateProvince,
  inputErrors,
  updateProvince
);
router.delete("/:id", validateProvinceId, inputErrors, deleteProvince);

export default router;
