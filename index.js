const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const server = require('http').createServer(app);

// Cambio la const por un módulo para exportarlo
module.exports.io = require('socket.io')(server);

// Llamo al archivo donde he movido la comunicación por sockets
require('./sockets/socket');

const publicPath = path.resolve( __dirname, 'public' )
app.use( express.static( publicPath ) );

server.listen(process.env.PORT, (err) => {
    if ( err ) throw new Error(err);
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});