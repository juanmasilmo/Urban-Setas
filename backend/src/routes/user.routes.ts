import { Router } from "express";
import {
  createUser,
  deleteUser,
  findAllUsers,
  findUserById,
  updateUser,
} from "../controllers/users.controller";
import { validateUser, validateUserId } from "../middleware/users.middleware";
import { inputErrors } from "../middleware/inputErrors.middleware";

const router = Router();

router.post("/", validateUser, inputErrors, createUser);
router.get("/", findAllUsers);
router.get("/:id", validateUserId, inputErrors, findUserById);
router.put("/:id", validateUserId, inputErrors, updateUser);
router.delete("/:id", validateUserId, inputErrors, deleteUser);

export default router;
