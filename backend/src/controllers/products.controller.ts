// controllers/products.controller.ts
import { Request, Response } from "express";
import ProductClass from "../models/products.model";

// Obtener todos los productos
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductClass.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductClass.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Obtener un producto por ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductClass.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
