const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Mensajes de Sockets

io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
     });

    // Voy a estar escuchando un 'mensaje' y detrás haré algo
    // en payload va el objeto que envian
    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);

        // El servidor va a emitir un mensaje a todos los clientes conectados
        io.emit('mensaje', { admin: 'Nuevo mensaje'});

    });
});


const publicPath = path.resolve( __dirname, 'public' )
app.use( express.static( publicPath ) );

server.listen(process.env.PORT, (err) => {
    if ( err ) throw new Error(err);
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});