import cors from "cors";

const corsOptions = {
  origin: true, // Permitir solicitudes desde este origen (frontend)
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
