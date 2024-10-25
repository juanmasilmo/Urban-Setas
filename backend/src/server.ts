import  Express  from "express";
//importar las rutas necesarias
import db from "./config/db";

const server = Express();

server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));

//server.use('/api/clients', routerCli);

async function connectDB() {
    try {
        await db.authenticate();
        await db.sync();
        console.log('DB conectada')
    } catch (error) {
        console.log(error)
        console.log('Error al conectar a la base de datos:')
    }
}
connectDB();

export default server;