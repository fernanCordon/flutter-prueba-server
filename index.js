// Esto es como una importación el flutter
const express = require('express');
const path = require('path');

// Me creo una aplicación y ya esoy listo para comenzar a escuchar peticiones
const app = express();

// Path pública o carpeta pública
// Apunta a donde sea que esté mi servidor, y de allí a mi carpeta public
const publicPath = path.resolve( __dirname, 'public' )

// Le digo a mi app de express que tiene ese path y que lo muestre cuando se haga una petición
app.use( express.static( publicPath ) );


// Me pongo a escuchar en el puerto 3000 y llamo un callback
// El callback me devuelve  un error si sucediese
app.listen(3000, (err) => {
    if ( err ) throw new Error(err);

    console.log(`Servidor corriendo en el puerto ${3000}`);
});