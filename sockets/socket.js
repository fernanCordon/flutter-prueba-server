
const { io } = require('../index');

// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
     });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje'});
    });

    client.on('emitir-mensaje', ( payload ) => {
        
        // Me aseguro de que recibo el mensaje en el servidor, así que debería verse 
        // algo en la consola de la terminal del servidor
        // console.log(payload);
        
        // Primero desactivé esto cuando puse el console de arriba y cuando he visto que
        // funciona lo activo
        client.broadcast.emit('nuevo-mensaje', payload);
    });

});