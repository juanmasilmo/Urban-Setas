import { Request, Response } from "express";
import RolClass from "../models/roles.model";

// Crear un nuevo rol
export const createRol = async (req: Request, res: Response) => {
  try {
    const rol = await RolClass.create(req.body);
    res.status(201).json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los roles
export const findAllRoles = async (req: Request, res: Response) => {
  try {
    const roles = await RolClass.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un rol por ID
export const findRolById = async (req: Request, res: Response) => {
  try {
    const rol = await RolClass.findByPk(req.params.id);
    if (rol) {
      res.status(200).json(rol);
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un rol
export const updateRol = async (req: Request, res: Response) => {
  try {
    const [updated] = await RolClass.update(req.body, {
      where: { idRol: req.params.id },
    });
    if (updated) {
      const updatedRol = await RolClass.findByPk(req.params.id);
      res.status(200).json(updatedRol);
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un rol
export const deleteRol = async (req: Request, res: Response) => {
  try {
    const deleted = await RolClass.destroy({
      where: { idRol: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
