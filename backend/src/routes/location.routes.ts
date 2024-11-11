// routes/location.routes.ts
import { Router } from "express";
import {
  createCountry,
  listCountries,
  createProvince,
  listProvinces,
  createCity,
  listCities,
} from "../controllers/location.controller";

const router = Router();

router.post("/countries", createCountry);
router.get("/countries", listCountries);
router.post("/provinces", createProvince);
router.get("/countries/:idCountry/provinces", listProvinces);
router.post("/cities", createCity);
router.get("/provinces/:idProvince/cities", listCities);

export default router;
