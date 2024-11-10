// controllers/products.controller.ts
import { Request, Response } from "express";
import ProductClass from "../models/products.model";

// Obtener todos los productos
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductClass.findAll();
    res.status(200).json(products); // Retornar todos los productos encontrados con estado 200
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductClass.create(req.body);
    res.status(201).json(product); // Retornar el producto creado con estado 201
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};

// Obtener un producto por ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductClass.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product); // Retornar el producto encontrado con estado 200
    } else {
      res.status(404).json({ message: "Producto no encontrado" }); // Retornar un mensaje de error 404 si no se encuentra el producto
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message }); // Asegurarse de capturar correctamente el mensaje de error
  }
};
