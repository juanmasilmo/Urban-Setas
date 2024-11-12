// controllers/purchase.controller.ts
/*import { Request, Response } from "express";
import ProductClass from "../models/products.model";

// Confirmar compra
export const confirmPurchase = async (req: Request, res: Response) => {
  const { products } = req.body; // Lista de productos en el carrito [{ idProduct, quantity }]

  try {
    for (const product of products) {
      const dbProduct = await ProductClass.findByPk(product.idProduct);
      if (dbProduct) {
        // Verificar si hay suficiente cantidad
        if (dbProduct.quantity < product.quantity) {
          return res.status(400).json({
            message: `Cantidad insuficiente para el producto ${dbProduct.productName}`,
          });
        }

        // Actualizar la cantidad
        dbProduct.quantity -= product.quantity;
        await dbProduct.save();
      }
    }

    res.status(200).json({ message: "Compra confirmada con éxito" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};*/
