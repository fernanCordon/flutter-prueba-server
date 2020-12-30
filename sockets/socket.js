
const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

// Si cambio un dato aquí se resetea todo
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

    // Aquí escucho cuando el cliente emita en 'vote-band'
    // Y luego tendré que llamar a ese vote-band desde el cliente Flutter
    client.on('vote-band', ( payload ) => {

        // Por ahora solo lo imprimiré en consola
        // console.log(payload);

        // El identificador que necesito para este método viene en el payload.id 
        bands.voteBand( payload.id );

        // Comunico a todos los que estén escuchando que ha habido un cambio, también a quien lo ha emitido
        // Lo hago mediante el 'active-bands'
        io.emit('active-bands', bands.getBands());
    });

    // client.on('emitir-mensaje', ( payload ) => {
    //     client.broadcast.emit('nuevo-mensaje', payload);
    // });

});