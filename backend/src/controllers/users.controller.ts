// controllers/users.controller.ts
import { Request, Response } from "express";
import UsersClass from "../models/users.model";

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UsersClass.create(req.body);
    res.status(201).json(user); // Retornar el usuario creado con estado 201
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener todos los usuarios
export const findAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UsersClass.findAll();
    res.status(200).json(users); // Retornar todos los usuarios encontrados con estado 200
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener un usuario por ID
export const findUserById = async (req: Request, res: Response) => {
  try {
    const user = await UsersClass.findByPk(req.params.id);
    res
      .status(user ? 200 : 404)
      .json(user || { message: "Usuario no encontrado" }); // Retornar el usuario encontrado o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Actualizar un usuario
export const updateUser = async (req: Request, res: Response) => {
  try {
    const [updated] = await UsersClass.update(req.body, {
      where: { idUser: req.params.id },
    });
    const updatedUser = updated
      ? await UsersClass.findByPk(req.params.id)
      : null;
    res
      .status(updatedUser ? 200 : 404)
      .json(updatedUser || { message: "Usuario no encontrado" }); // Retornar el usuario actualizado o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Eliminar un usuario
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleted = await UsersClass.destroy({
      where: { idUser: req.params.id },
    });
    res
      .status(deleted ? 204 : 404)
      .json(deleted ? null : { message: "Usuario no encontrado" }); // Retornar estado 204 si se elimina o 404 si no se encuentra
  } catch (error) {
    res.status(500).json({ message: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};
