import { Request, Response } from 'express';
import {CityClass} from '../models/cities.model';
import {ProvinceClass} from '../models/provinces.model';

// Crear una nueva ciudad
export const createCity = async (req: Request, res: Response) => {
    try {
        const { cityName, idProvince } = req.body;
        const newCity = await CityClass.create({ cityName, idProvince });
        res.status(201).json(newCity);
    } catch (error) {
        console.error('Error al crear una ciudad', error);
        res.status(500).json({ error: error.message });
    }
};

// Obtener todas las ciudades
export const getAllCities = async (req: Request, res: Response) => {
    try {
        const cities = await CityClass.findAll({ include: [ProvinceClass] });
        res.status(200).json(cities);
    } catch (error) {
        console.error('Error al obtener las ciudades', error);
        res.status(500).json({ error: error.message });
    }
};

// Obtener una ciudad por ID
export const getCityById = async (req: Request, res: Response) => {
    try {
        const city = await CityClass.findByPk(req.params.id, { include: [ProvinceClass] });
        if (city) {
            res.status(200).json(city);
        } else {
            res.status(404).json({ error: "Ciudad no encontrada" });
        }
    } catch (error) {
        console.error('Error al obtener la ciudad', error);
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una ciudad
export const updateCity = async (req: Request, res: Response) => {
    try {
        const city = await CityClass.findByPk(req.params.id);
        if (city) {
            await city.update(req.body);
            res.status(200).json(city);
        } else {
            res.status(404).json({ error: "Ciudad no encontrada para modificar" });
        }
    } catch (error) {
        console.error('Error al actualizar la ciudad', error);
        res.status(500).json({ error: error.message });
    }
};

// Eliminar una ciudad
export const deleteCity = async (req: Request, res: Response) => {
    try {
        const deleted = await CityClass.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Ciudad no encontrada para eliminar" });
        }
    } catch (error) {
        console.error('Error al eliminar la ciudad', error);
        res.status(500).json({ error: error.message });
    }
};
