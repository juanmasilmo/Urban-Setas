import server from './server';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;//importo la variable de entorno desde dotenv y la asigno a la variable local, siempre debo usar la variable local

server.listen(port,() => {//()=> funcion flecha anonima, seria como un procedimiento, pues no se devuelve ningun valor, se ejecuta la funcion anonima(procedimiento) para que haga algo, no devuelve nada porque no tiene unr return
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});