const express = require('express');
const path = require('path');

// para el paquete dotenv que he descargado (npm i dotenv)
// Cuando esté en producción tendré que escuchar el puerto que haya en el dominio
// Leerá el archivo .env y establecerá las variables de entorno
require('dotenv').config();

const app = express();

const publicPath = path.resolve( __dirname, 'public' )

app.use( express.static( publicPath ) );

// Y así puedo leer el puerto desde la variable de entorno
app.listen(process.env.PORT, (err) => {
    if ( err ) throw new Error(err);
    // para que me saque el puerto en el que está corriendo
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});