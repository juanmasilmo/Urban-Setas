import { Request, Response } from "express";
import ClientClass from "../models/clients.model";

// Crear un nuevo cliente
export const createClient = async (req: Request, res: Response) => {
    try {
        const client = await ClientClass.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los clientes
export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await ClientClass.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un cliente por ID
export const getClientById = async (req: Request, res: Response) => {
    try {
        const client = await ClientClass.findByPk(req.params.id);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ error: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un cliente
export const updateClient = async (req: Request, res: Response) => {
    try {
        const [updated] = await ClientClass.update(req.body, {
            where: { idClient: req.params.id },
        });
        if (updated) {
            const updatedClient = await ClientClass.findByPk(req.params.id);
            res.status(200).json(updatedClient);
        } else {
            res.status(404).json({ error: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un cliente
export const deleteClient = async (req: Request, res: Response) => {
    try {
        const deleted = await ClientClass.destroy({
            where: { idClient: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
