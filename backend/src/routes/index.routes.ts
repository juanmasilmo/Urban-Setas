// index.ts (archivo principal de rutas)
import { Router } from "express";
import citiesRoutes from "./cities.routes";
import countriesRoutes from "./countries.routes";
import provincesRoutes from "./provinces.routes";
import clientsRoutes from "./clients.routes";
import rolRoutes from "./rol.routes";
import userRoutes from "./user.routes";
import stockRoutes from "./stock.routes";

const router = Router();

// Definición de rutas
router.use("/cities", citiesRoutes);
router.use("/countries", countriesRoutes);
router.use("/provinces", provincesRoutes);
router.use("/clients", clientsRoutes);
router.use("/rol", rolRoutes);
router.use("/user", userRoutes);
router.use("/stock", stockRoutes);

export { router };
