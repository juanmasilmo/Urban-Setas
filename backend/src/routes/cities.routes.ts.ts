// routes/city.routes.ts
import { Router } from 'express';
import {
    createCity,
    getAllCities,
    getCityById,
    updateCity,
    deleteCity
} from '../controllers/city.controller';
import { inputErrors, validateCity, validateCityId } from '../middleware/city.middleware';

const router = Router();

// Crear una nueva ciudad
router.post('/', validateCity, inputErrors, createCity);

// Obtener todas las ciudades
router.get('/', getAllCities);

// Obtener una ciudad por ID
router.get('/:id', validateCityId, inputErrors, getCityById);

// Actualizar una ciudad
router.put('/:id', validateCityId, inputErrors, validateCity, inputErrors, updateCity);

// Eliminar una ciudad
router.delete('/:id', validateCityId, inputErrors, deleteCity);

export default router;
