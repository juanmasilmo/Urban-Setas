// controllers/clients.controller.ts
import { Request, Response } from "express";
import ClientClass from "../models/clients.model";

// Crear un nuevo cliente
export const createClient = async (req: Request, res: Response) => {
  try {
    const client = await ClientClass.create(req.body);
    res.status(201).json(client); // Retornar el cliente creado con estado 201
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener todos los clientes
export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await ClientClass.findAll();
    res.status(200).json(clients); // Retornar todos los clientes encontrados con estado 200
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener un cliente por ID
export const getClientById = async (req: Request, res: Response) => {
  try {
    const client = await ClientClass.findByPk(req.params.id);
    res
      .status(client ? 200 : 404)
      .json(client || { error: "Cliente no encontrado" }); // Retornar el cliente encontrado o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Actualizar un cliente
export const updateClient = async (req: Request, res: Response) => {
  try {
    const [updated] = await ClientClass.update(req.body, {
      where: { idClient: req.params.id },
    });
    const updatedClient = updated
      ? await ClientClass.findByPk(req.params.id)
      : null;
    res
      .status(updatedClient ? 200 : 404)
      .json(updatedClient || { error: "Cliente no encontrado" }); // Retornar el cliente actualizado o un mensaje de error 404
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Eliminar un cliente
export const deleteClient = async (req: Request, res: Response) => {
  try {
    const deleted = await ClientClass.destroy({
      where: { idClient: req.params.id },
    });
    res
      .status(deleted ? 204 : 404)
      .json(deleted ? null : { error: "Cliente no encontrado" }); // Retornar estado 204 si se elimina o 404 si no se encuentra
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};
