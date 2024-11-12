import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173", // Permitir solicitudes desde este origen (frontend)
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
