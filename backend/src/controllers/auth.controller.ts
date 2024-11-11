// controllers/auth.controller.ts
import { Request, Response } from "express";
import UserClass from "../models/users.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import RolClass from "../models/roles.model";

// Registro de usuarios
export const register = async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;

  try {
    // Verificar si el correo electrónico ya está en uso
    const existingUser = await UserClass.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "El email ya está en uso" });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario con rol de cliente (rol ID 2)
    const newUser = await UserClass.create({
      userName,
      email,
      password: hashedPassword,
      idRol: 2, // Asegurarse de que el rol cliente tiene ID 2
    });

    // Generar un token de JWT para el usuario registrado
    const token = jwt.sign(
      { idUser: newUser.idUser },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    res.status(201).json({ message: "Usuario registrado exitosamente", token });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Login de usuarios
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
