import server from "./server";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3002; //importo la variable de entorno desde dotenv y la asigno a la variable local, siempre debo usar la variable 
server.listen(port, () => { /*()=> funcion flecha anonima, seria como un procedimiento, pues no se devuelve ningun valor, se ejecuta la funcion anonima(procedimiento) para que haga algo, no devuelve nada porque no tiene un return no todas las funciones anonimas funcionan como procedimientos*/
  console.log(`servidor corriendo correctamente en puerto: ${port}`);
});
