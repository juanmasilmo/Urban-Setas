import express from "express";
import db from "./config/db";
// Importa las rutas desde el archivo de rutas
import { router } from "./routes/index.routes"; // Corregí el espaciado para mantener la consistencia

const server = express();

// Configuración de middleware para parsear JSON y datos de formulario
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Configura las rutas en el prefijo /api
server.use("/api", router);

// Manejo de errores global
server.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Ocurrió un error en el servidor" });
  }
);

// Conexión a la base de datos
async function connectDB() {
  try {
    await db.authenticate();
    await db.sync(); // Sincronización de modelos
    console.log("DB conectada");
  } catch (error) {
    console.log("Error de conexión a la DB:", error);
  }
}

connectDB();

export default server;
