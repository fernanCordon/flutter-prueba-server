const express = require('express');
const path = require('path');
require('dotenv').config();

// He puesto la app de Express encima del server
const app = express();

// Node Server a la que le asigno el app de express
const server = require('http').createServer(app);
// Configuración propia del server de socket: io (in y out: info que viene y va)
// Le mandamos de argumento el servidor Node que hemos creado
const io = require('socket.io')(server);

// Mensajes de Sockets

// El client es una computadora o dispositivo que se acaba de conectar a mi Socket server
// Cuando la web se recargue, esa conexión de ese navegador web cae a client
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
     })
});


const publicPath = path.resolve( __dirname, 'public' )
app.use( express.static( publicPath ) );

// Cambiamos app por server
server.listen(process.env.PORT, (err) => {
    if ( err ) throw new Error(err);
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});