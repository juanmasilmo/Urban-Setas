// controllers/auth.controller.ts
import { Request, Response } from "express";
import UserClass from "../models/users.model";
import jwt from  "jsonwebtoken";
import bcrypt from "bcryptjs";

// Login con email y password
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario por el correo electrónico
    const user = await UserClass.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Comparar la contraseña proporcionada con la almacenada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // Crear un JWT para el usuario
    const token = jwt.sign({ idUser: user.idUser }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login exitoso", token });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
