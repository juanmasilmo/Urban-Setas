import server from './server';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000; //importo la variable de entorno desde dotenv y la asigno a la variable local, siempre debo usar la variable local
server.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});
//# sourceMappingURL=index.js.map