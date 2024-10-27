import { Request, Response } from "express";
import { Model, ModelCtor } from "sequelize-typescript";

interface BaseAttributes {
  id: number;
}
// BaseController es una clase genérica que extiende Model, y se asegura de que el tipo del modelo sea compatible con los métodos de Sequelize
class BaseController<T extends Model> {
  private model: ModelCtor<T>;

  // Constructor que recibe un modelo de tipo ModelCtor<T>, permitiendo tipado completo en TypeScript
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
  // Declaración de método para buscar por ID
  async findById(req: Request, res: Response) {
    try {
      const instance = await this.model.findByPk(req.params.id);
      if (instance) {
        res.status(200).json(instance);
      } else {
        res
          .status(404)
          .json({ message: `${this.model.name} No se encontró la instancia` });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /*async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const [updated] = await this.model.update(req.body, {
        where: { id },
      });
      if (updated) {
        const updatedInstance = await this.model.findByPk(req.params.id);
        res.status(200).json(updatedInstance);
      } else {
        res
          .status(404)
          .json({ message: `${this.model.name} No se encontró el id` });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }*/
}

export default BaseController;
