// controllers/provinces.controller.ts
import { Request, Response } from "express";
import ProvinceClass from "../models/provinces.model";
import CityClass from "../models/cities.model";
import CountryClass from "../models/countries.model";

// Crear una nueva provincia
export const createProvince = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nameProvince, idCountry } = req.body;
    const newProvince = await ProvinceClass.create({ nameProvince, idCountry });
    res.status(201).json(newProvince); // Retornar la nueva provincia creada con estado 201
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener todas las provincias
export const getAllProvinces = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const provinces = await ProvinceClass.findAll({
      include: [CountryClass, { model: CityClass }],
    });
    res.status(200).json(provinces); // Retornar todas las provincias encontradas con estado 200
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener una provincia por ID
export const getProvinceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const province = await ProvinceClass.findByPk(id, {
      include: [CountryClass, { model: CityClass }],
    });
    res
      .status(province ? 200 : 404)
      .json(province || { message: "Provincia no encontrada" }); // Retornar la provincia encontrada o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Actualizar una provincia
export const updateProvince = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { nameProvince, idCountry } = req.body;
  try {
    const [updated] = await ProvinceClass.update(
      { nameProvince, idCountry },
      { where: { id } }
    );
    const updatedProvince = updated
      ? await ProvinceClass.findByPk(id, {
          include: [CountryClass, { model: CityClass }],
        })
      : null;
    res
      .status(updatedProvince ? 200 : 404)
      .json(updatedProvince || { message: "Provincia no encontrada" }); // Retornar la provincia actualizada o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Eliminar una provincia
export const deleteProvince = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const deleted = await ProvinceClass.destroy({ where: { id } });
    res
      .status(deleted ? 204 : 404)
      .json(deleted ? null : { message: "Provincia no encontrada" }); // Retornar estado 204 si se elimina o 404 si no se encuentra
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};
