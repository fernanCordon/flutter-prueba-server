
const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand( new Band( 'Breaking Benjamin' ));
bands.addBand( new Band( 'Bon Jovi' ));
bands.addBand( new Band( 'Héroes del Silencio' ));
bands.addBand( new Band( 'Metallica' ));

io.on('connection', client => {
    console.log('Cliente conectado');

    client.emit('active-bands', bands.getBands());

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
     });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);
        io.emit('mensaje', { admin: 'Nuevo mensaje'});
    });

    client.on('vote-band', ( payload ) => {
        bands.voteBand( payload.id );
        io.emit('active-bands', bands.getBands());
    });

    // Escuchar el evento add-band
    client.on('add-band', ( payload ) => {

        // Creo una banda con el name
        const newBand = new Band( payload.name );
        // Añado una banda
        bands.addBand( newBand );
        // Emito este mensaje para que todos los clientes sean notificados de que hay una nueva banda
        // Y ahora voy al dispositivo y añado a Queen, y a ABC
        io.emit('active-bands', bands.getBands());
    });

});