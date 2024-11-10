// controllers/base.controller.ts
/*import { Request, Response } from "express";
import { Model, ModelCtor } from "sequelize-typescript";

interface BaseAttributes {
  id: number;
}

class BaseController<T extends Model<T>> {
  private model: ModelCtor<T>;

  constructor(model: ModelCtor<T>) {
    this.model = model;
  }

  // Método para crear una nueva instancia en la base de datos usando el modelo especificado
  async create(req: Request, res: Response) {
    try {
      const instance = await this.model.create(req.body); // Crea una instancia con datos de la solicitud
      res.status(201).json(instance); // Retorna la instancia creada con un status 201
    } catch (error) {
      res.status(500).json({
        message: `Error al crear instancia: ${(error as Error).message}`,
      }); // Manejo de errores
    }
  }

  // Método para obtener todas las instancias de la base de datos usando el modelo especificado
  async findAll(req: Request, res: Response) {
    try {
      const instances = await this.model.findAll(); // Encuentra todas las instancias del modelo
      res.status(200).json(instances); // Retorna las instancias encontradas
    } catch (error) {
      res.status(500).json({
        message: `Error al encontrar instancias: ${(error as Error).message}`,
      }); // Manejo de errores
    }
  }

  // Método para buscar una instancia por ID
  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id); // Conversión explícita
      const instance = await this.model.findByPk(id);
      res
        .status(instance ? 200 : 404)
        .json(instance || { message: `${this.model.name} no encontrado` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Método para actualizar una instancia
  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id); // Conversión explícita
      const [updated] = await this.model.update(req.body, {
        where: { id }, // Verifica que 'id' sea el nombre de la columna primaria en tu modelo
      });
      const updatedInstance = updated ? await this.model.findByPk(id) : null;
      res
        .status(updatedInstance ? 200 : 404)
        .json(
          updatedInstance || { message: `${this.model.name} no encontrado` }
        );
    } catch (error) {
      res.status(500).json({ message: (error as Error).message }); // Añadí una conversión explícita al tipo Error
    }
  }

  // Método para eliminar una instancia
  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id); // Conversión explícita
      const deleted = await this.model.destroy({
        where: { id },
      });
      res
        .status(deleted ? 204 : 404)
        .json(deleted ? null : { message: `${this.model.name} no encontrado` });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message }); // Añadí una conversión explícita al tipo Error
    }
  }
}

export default BaseController;*/
