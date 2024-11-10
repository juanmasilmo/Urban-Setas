import { Router } from "express";
import { validateClient } from "../middleware/clients.middleware";
import { inputErrors } from "../middleware/inputErrors.middleware";
import {
  createClient,
  deleteClient,
  getClientById,
  getClients,
  updateClient,
} from "../controllers/clients.controller";

const router = Router();

router.post("/", validateClient, inputErrors, createClient);
router.get("/", getClients);
router.get("/:id", getClientById);
router.put("/:id", validateClient, inputErrors, updateClient);
router.delete("/:id", validateClient, inputErrors, deleteClient);

export default router;
