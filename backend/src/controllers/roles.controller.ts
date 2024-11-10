// controllers/roles.controller.ts
import { Request, Response } from "express";
import RolClass from "../models/roles.model";

// Crear un nuevo rol
export const createRol = async (req: Request, res: Response) => {
  try {
    const rol = await RolClass.create(req.body);
    res.status(201).json(rol); // Retornar el rol creado con estado 201
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener todos los roles
export const findAllRoles = async (req: Request, res: Response) => {
  try {
    const roles = await RolClass.findAll();
    res.status(200).json(roles); // Retornar todos los roles encontrados con estado 200
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener un rol por ID
export const findRolById = async (req: Request, res: Response) => {
  try {
    const rol = await RolClass.findByPk(req.params.id);
    res.status(rol ? 200 : 404).json(rol || { message: "Rol no encontrado" }); // Retornar el rol encontrado o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Actualizar un rol
export const updateRol = async (req: Request, res: Response) => {
  try {
    const [updated] = await RolClass.update(req.body, {
      where: { idRol: req.params.id },
    });
    const updatedRol = updated ? await RolClass.findByPk(req.params.id) : null;
    res
      .status(updatedRol ? 200 : 404)
      .json(updatedRol || { message: "Rol no encontrado" }); // Retornar el rol actualizado o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Eliminar un rol
export const deleteRol = async (req: Request, res: Response) => {
  try {
    const deleted = await RolClass.destroy({
      where: { idRol: req.params.id },
    });
    res
      .status(deleted ? 204 : 404)
      .json(deleted ? null : { message: "Rol no encontrado" }); // Retornar estado 204 si se elimina o 404 si no se encuentra
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};
