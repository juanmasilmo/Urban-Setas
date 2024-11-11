// controllers/cart.controller.ts
import { Request, Response } from "express";
import ClientProduct from "../models/clientsProducts.model"; // Tabla intermedia
import ClientClass from "../models/clients.model";
import ProductClass from "../models/products.model";

// Agregar un producto al carrito
export const addToCart = async (req: Request, res: Response) => {
  const { clientId, productId, quantity } = req.body;

  try {
    const client = await ClientClass.findByPk(clientId);
    if (!client) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const product = await ProductClass.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    const cartItem = await ClientProduct.findOne({
      where: { clientId, productId },
    });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      await ClientProduct.create({ clientId, productId, quantity });
    }

    res.status(200).json({ message: "Producto agregado al carrito" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Ver los productos del carrito de un cliente
export const getCart = async (req: Request, res: Response) => {
  const { clientId } = req.params;

  try {
    const cartItems = await ClientProduct.findAll({
      where: { clientId },
      include: [{ model: ProductClass, required: true }],
    });

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
