
const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');


// Creo una instancia de Bands y veo que se importa arriba automáticamente
const bands = new Bands();

bands.addBand( new Band( 'Queen' ));
bands.addBand( new Band( 'Bon Jovi' ));
bands.addBand( new Band( 'Héroes del Silencio' ));
bands.addBand( new Band( 'Metallica' ));

// console.log(bands);


io.on('connection', client => {
    console.log('Cliente conectado');

    // cuando un cliente se conecta, que es aquí, puedo enviarle todas las bandas que haya.
    // Solo se lo emitiré al cliente que se conecte.
    // Para verlo voy al Html
    client.emit('active-bands', bands.getBands());

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
     });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje'});
    });

    client.on('emitir-mensaje', ( payload ) => {
        client.broadcast.emit('nuevo-mensaje', payload);
    });

});