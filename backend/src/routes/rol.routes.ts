import { Router } from "express";
import {
  createRol,
  deleteRol,
  findAllRoles,
  findRolById,
  updateRol,
} from "../controllers/roles.controller";
import { validateRol, validateRolId } from "../middleware/roles.middleware";
import { inputErrors } from "../middleware/inputErrors.middleware";

const router = Router();

router.post("/", validateRol, inputErrors, createRol);
router.delete("/:id", validateRolId, deleteRol);
router.get("/", findAllRoles);
router.get("/:id", findRolById);
router.put("/:id", validateRolId, validateRol, inputErrors, updateRol);

export default router;
