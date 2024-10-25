import Express from "express";
import db from "./config/db";
//agregar los imports de las rutas

const server = Express();

server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));

//server.use('./api/clientes',routesCli);//agregar las apis de las routes

async function connectDB() {
  try {
    await db.authenticate();
    await db.sync();
    console.log("DB conectada");
  } catch (error) {
    console.log(error);
    console.log("no se conecto a la DB");
  }
}
connectDB();
export default server;
