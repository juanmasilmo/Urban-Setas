import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

/*¿Cómo funciona process.env?
process.env es una propiedad del objeto process que contiene todas las variables de entorno. Las variables de entorno son pares clave-valor que el sistema operativo o el entorno de ejecución le pasa a una aplicación cuando arranca.
Por ejemplo, si en tu sistema configuras la variable DATABASE_URL, esa variable estará disponible en process.env.DATABASE_URL*/

dotenv.config();//esto lee el archivo .env del dir raiz y carga las variables de entorno para tenerlas disponibles en el codigo. espera que la variable de entorno DATABASE_URL esté presente
/*¿Qué hace dotenv.config()?
dotenv es un paquete que carga variables de entorno desde un archivo .env "a" process.env.*/

const db = new Sequelize(process.env.DATABASE_URL,{
    models: [__dirname + '/../Urban-Setas/backend/src/models/**/*.ts'] //lo que digo aca es que se accede a todos los archivos.ts dentro de la carpeta models
});
export default db;

/*process es un objeto global de Node.js que representa el proceso en el que corre tu aplicación.
process.env contiene las variables de entorno.
dotenv.config() toma las variables de un archivo .env y las añade a process.env.
dotenv no necesita "crear" el objeto process, ya que este ya existe en Node.js por defecto. */
