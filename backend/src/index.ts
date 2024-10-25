import server from "./server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3002;
server.listen(port, () => {
  console.log(`servidor corriendo correctamente en puerto: ${port}`);
});
