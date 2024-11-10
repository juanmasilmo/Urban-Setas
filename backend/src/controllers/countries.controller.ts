// controllers/countries.controller.ts
import { Request, Response } from "express";
import CountryClass from "../models/countries.model";

// Crear un nuevo país
export const createCountry = async (req: Request, res: Response) => {
  try {
    const country = await CountryClass.create(req.body);
    res.status(201).json(country); // Retornar el país creado con estado 201
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener todos los países
export const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await CountryClass.findAll();
    res.status(200).json(countries); // Retornar todos los países encontrados con estado 200
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener un país por ID
export const getCountryById = async (req: Request, res: Response) => {
  try {
    const country = await CountryClass.findByPk(req.params.id);
    res
      .status(country ? 200 : 404)
      .json(country || { error: "País no encontrado" }); // Retornar el país encontrado o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Actualizar un país
export const updateCountry = async (req: Request, res: Response) => {
  try {
    const [updated] = await CountryClass.update(req.body, {
      where: { idCountry: req.params.id },
    });
    const updatedCountry = updated
      ? await CountryClass.findByPk(req.params.id)
      : null;
    res
      .status(updatedCountry ? 200 : 404)
      .json(updatedCountry || { error: "País no encontrado" }); // Retornar el país actualizado o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Eliminar un país
export const deleteCountry = async (req: Request, res: Response) => {
  try {
    const deleted = await CountryClass.destroy({
      where: { idCountry: req.params.id },
    });
    res
      .status(deleted ? 204 : 404)
      .json(deleted ? null : { error: "País no encontrado" }); // Retornar estado 204 si se elimina o 404 si no se encuentra
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};
