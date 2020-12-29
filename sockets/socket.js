
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

    // Escucho cuando un cliente emita ese mensaje
    client.on('emitir-mensaje', ( payload ) => {

        // Después de emitir el HEY!!! ABRO CHROME EN localhost:3000 y en la consola pongo:
        // socket.emit('emitir-mensaje', 'Fernando');
        // Presiono ENTER y en la debug de Flutter cayó el mensaje HEY!!! ¿Porqué?
        // Porque esto me llegó aquí al servidor y yo envié 'nuevo-mensaje' que lleva el HEY!!!
        // Así que como Flutter está escuchando 'nuevo-mensaje' llegó hasta allí

        // io.emit('nuevo-mensaje', 'HEY!!!!!');

        // io.emit('nuevo-mensaje', payload); // EMITE A TODOS LOS CLIENTES CONECTADOS

        // Si quiero emitir a todos menos al cliente que lo emitió (en este caso el navegador, o el que sea)
        // Si yo habla, el servidor no me repetirá lo que he dicho
        client.broadcast.emit('nuevo-mensaje', payload);

        //VUELVO AL NAVEGADOR A EMITIR ESTE MENSAJE
        // socket.emit('emitir-mensaje', {nombre: 'Fernando', mensaje: 'Hola Mundo'});
    });

});