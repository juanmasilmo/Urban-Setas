import { Request, Response } from "express";
import ClientProduct from "../models/clientsProducts.model";
import ClientClass from "../models/clients.model";
import ProductClass from "../models/products.model";

// Crear un nuevo registro de ClientProduct
export const createClientProduct = async (req: Request, res: Response) => {
  try {
    const { clientId, productId, quantitySold, date } = req.body;
    const newClientProduct = await ClientProduct.create({
      clientId,
      productId,
      quantitySold,
      date,
    });
    res.status(201).json(newClientProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el registro" });
  }
};

export const getClientProducts = async (req: Request, res: Response) => {
  try {
    const clientProducts = await ClientProduct.findAll({
      include: [
        {
          model: ClientClass,
          as: "client", // Usamos el alias configurado en ClientProduct
          attributes: [
            "idClient",
            "clientName",
            "clientLastname",
            "clientEmail",
            "clientPhone",
            "clientAddress",
          ],
        },
        {
          model: ProductClass,
          as: "product", // Usamos el alias configurado en ClientProduct
          attributes: ["idProduct", "productName", "price"],
        },
      ],
      attributes: ["quantitySold", "date"], // Atributos específicos de ClientProduct
    });

    res.status(200).json(clientProducts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los registros" });
  }
};

// Obtener un registro de ClientProduct por ID
export const getClientProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clientProduct = await ClientProduct.findByPk(id, {
      include: [ClientClass, ProductClass],
    });
    if (clientProduct) {
      res.status(200).json(clientProduct);
    } else {
      res.status(404).json({ error: "Registro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el registro" });
  }
};

// Actualizar un registro de ClientProduct
export const updateClientProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { clientId, productId, quantitySold, date } = req.body;
    const clientProduct = await ClientProduct.findByPk(id);
    if (clientProduct) {
      clientProduct.clientId = clientId;
      clientProduct.productId = productId;
      clientProduct.quantitySold = quantitySold;
      clientProduct.date = date;
      await clientProduct.save();
      res.status(200).json(clientProduct);
    } else {
      res.status(404).json({ error: "Registro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el registro" });
  }
};

// Eliminar un registro de ClientProduct
export const deleteClientProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clientProduct = await ClientProduct.findByPk(id);
    if (clientProduct) {
      await clientProduct.destroy();
      res.status(200).json({ message: "Registro eliminado correctamente" });
    } else {
      res.status(404).json({ error: "Registro no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el registro" });
  }
};
