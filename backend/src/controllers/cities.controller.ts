// controllers/cities.controller.ts
import { Request, Response } from "express";
import CityClass from "../models/cities.model";
import ProvinceClass from "../models/provinces.model";

// Crear una nueva ciudad
export const createCity = async (req: Request, res: Response) => {
  try {
    const { cityName, idProvince } = req.body;
    const newCity = await CityClass.create({ cityName, idProvince });
    res.status(201).json(newCity); // Retornar la nueva ciudad creada con estado 201
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener todas las ciudades
export const getAllCities = async (req: Request, res: Response) => {
  try {
    const cities = await CityClass.findAll({ include: [ProvinceClass] });
    res.status(200).json(cities); // Retornar todas las ciudades encontradas con estado 200
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener una ciudad por ID
export const getCityById = async (req: Request, res: Response) => {
  try {
    const city = await CityClass.findByPk(req.params.id, {
      include: [ProvinceClass],
    });
    res
      .status(city ? 200 : 404)
      .json(city || { error: "Ciudad no encontrada" }); // Retornar la ciudad encontrada o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Actualizar una ciudad
export const updateCity = async (req: Request, res: Response) => {
  try {
    const [updated] = await CityClass.update(req.body, {
      where: { id: req.params.id },
    });
    const updatedCity = updated
      ? await CityClass.findByPk(req.params.id, { include: [ProvinceClass] })
      : null;
    res
      .status(updatedCity ? 200 : 404)
      .json(updatedCity || { error: "Ciudad no encontrada" }); // Retornar la ciudad actualizada o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Eliminar una ciudad
export const deleteCity = async (req: Request, res: Response) => {
  try {
    const deleted = await CityClass.destroy({
      where: { id: req.params.id },
    });
    res
      .status(deleted ? 204 : 404)
      .json(deleted ? null : { error: "Ciudad no encontrada" }); // Retornar estado 204 si se elimina o 404 si no se encuentra
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};
