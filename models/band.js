// Vamos a implementar la lógica para el manejo de la votación en el backend server
// Crearé 2 clases: Una, para cada una de las instancias, y la otra, para manejar la
// colección de las band names ( en otro archivo )

// Importo el uuid, que le puedo poner el alias. Eso crea un id muy largo y único
const { v4: uuidv4 } = require('uuid');

class Band {

    // El constructor recibe solamente name con un valor por defecto, por si acaso, aunque no hará falta
    constructor( name = 'no-name') {
        // Existe un paquete npm que generá ids únicos.
        // Lo cargo en la terminal  ==> npm i uuid  ó  npm i uuid@8.3.0 (versión anterior)
        // Identificador único
        thsi.id = uuidv4()
        this.name = name;
        this.votes = 0;
    }
}

// En Node, para utilizar las clases hay que exportarlas manualmente
// Esto crea la exportación por defecto cuando lo queramos
module.exports = Band;