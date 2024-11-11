import "reflect-metadata";
import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import CityClass from "../models/cities.model";
import CountryClass from "../models/countries.model";
import ProvinceClass from "../models/provinces.model";
import ClientClass from "../models/clients.model";
import client_products from '../models/clientsProducts.model';
import ProductClass from "../models/products.model";
import RolClass from "../models/roles.model";
import UsersClass from "../models/users.model";

/*¿Cómo funciona process.env?
process.env es una propiedad del objeto process que contiene todas las variables de entorno. Las variables de entorno son pares clave-valor que el sistema operativo o el entorno de ejecución le pasa a una aplicación cuando arranca.
Por ejemplo, si en tu sistema configuras la variable DATABASE_URL, esa variable estará disponible en process.env.DATABASE_URL*/

dotenv.config(); //esto lee el archivo .env del dir raiz y carga las variables de entorno para tenerlas disponibles en el codigo. espera que la variable de entorno DATABASE_URL esté presente
/*¿Qué hace dotenv.config()?
dotenv es un paquete que carga variables de entorno desde un archivo .env "a" process.env.*/

const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'UrbanSetas',
  models: [CityClass, CountryClass, ProvinceClass, ClientClass, UsersClass, client_products,ProductClass, RolClass], // Los modelos explícitamente importados
  logging: false,
});

/*async function syncDatabase() {
  try {
    await db.sync({ force: true }); // Esta opción recreará las tablas a la fuerza
    console.log("¡Base de datos sincronizada y recreada con éxito!");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
}
syncDatabase();*///esta funcion fuerza la eliminacion de la base de datos

async function syncDatabase() {
  try {
    await db.sync({ alter: true }); // Esta opción actualizará las tablas sin eliminarlas
    console.log("¡Base de datos sincronizada y actualizada con éxito!");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
}

syncDatabase();//esta funcion solo altera las tablas si es necesario



export default db;
/*process es un objeto global de Node.js que representa el proceso en el que corre tu aplicación.
process.env contiene las variables de entorno.
dotenv.config() toma las variables de un archivo .env y las añade a process.env.
dotenv no necesita "crear" el objeto process, ya que este ya existe en Node.js por defecto. */
