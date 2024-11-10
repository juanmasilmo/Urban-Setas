import { Request, Response, NextFunction } from "express";
import Stock from "../models/stock.model";

// Actualizar el stock de un producto
export const updateStock = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { productId, quantity } = req.body;
    const stock = await Stock.findOne({ where: { productId } });

    if (!stock) {
      // Manejamos el error aquí, pero no retornamos un Response explícito
      res.status(404).json({ message: "Stock no encontrado para el producto" });
      return;
    }

    if (stock.quantity < quantity) {
      // Manejamos el error aquí también
      res
        .status(400)
        .json({ message: "Stock insuficiente para la cantidad solicitada" });
      return;
    }

    stock.quantity -= quantity;
    await stock.save();

    // Ahora manejamos la respuesta sin retornarla explícitamente
    res.status(200).json({ message: "Stock actualizado", stock });
  } catch (error) {
    // En caso de error, se pasa al middleware de manejo de errores
    next(error);
  }
};
