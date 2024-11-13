import { Request, Response } from "express";
import UsersClass from "../models/users.model";

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UsersClass.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los usuarios
export const findAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UsersClass.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario por ID
export const findUserById = async (req: Request, res: Response) => {
  try {
    const user = await UsersClass.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un usuario
export const updateUser = async (req: Request, res: Response) => {
  try {
    const [updated] = await UsersClass.update(req.body, {
      where: { idUser: req.params.id },
    });
    if (updated) {
      const updatedUser = await UsersClass.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un usuario
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await UsersClass.destroy({
      where: { idUser: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
