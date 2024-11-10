import "reflect-metadata";
import server from "./server";
import dotenv from "dotenv";
import sequelize from "./config/db";

dotenv.config();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida exitosamente.");
  } catch (error) {
    console.error("No se puede conectar a la base de datos:", error);
  }
})();

const port = process.env.PORT || 3002; // Importo la variable de entorno desde dotenv y la asigno a la variable local. Siempre debo usar la variable de entorno.

server.listen(port, () => {
  // Función anónima que se ejecuta cuando el servidor está corriendo, no devuelve nada.
  console.log(`Servidor corriendo correctamente en puerto: ${port}`);
});
