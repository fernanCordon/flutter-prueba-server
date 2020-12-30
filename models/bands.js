// Clase para manejar todas las bandas que tendré en la tableView de Flutter
// Añadir nuevas bandas, borrarlas, votar por una de ellas, etc

const Band = require("./band");

class Bands {

    constructor() {
        this.bands = [];
    }

    // Método para añadir una nueva banda. Le añado una banda por defecto para que 
    // sepa que band va a ser siempre de tipo Band (es algo parecido a un tipado), pero
    // eso eso podría no haberlo puesto
    addBand( band = new Band() ) {
        // Añado la banda
        this.bands.push( band );
    }

    // Método para obtener las bandas
    getBands() {
        return this.bands;
    }

    // Método para borrar una banda al que le paso el id
    deleteBand( id = '' ) {
        // Lo filtro  pasándole la condición que es una función que recoge todas 
        // las bandas cuyo id no es el que paso yo
        // Si regresa un true, lo filtrará. por eso le pongo que sea diferente
        // Me traerá todas menos la del id, con lo cual quedará eliminada
        this.bands = this.bands.filter( band => band.id !== id );
        return this.bands;
    }

    // Método para votar por una banda
    voteBand( id = '' ) {
        // Voy a recorrer las bandas con un map para cambiar la que haya sido votada
        this.bands = bands.map( band => {
            // Le incremento los votos en uno a aquella banda cuyo id es el que me pasan
            if ( band.id === id ) {
                band.votes++;
                // Devuelvo esa banda que es la que ha sido transformada
                return band;
            } else {
                // En caso de que no coincida con el id devuelvo la banda tal cual estaba
                return band
            }
        });

    }
}

// En Node, para utilizar las clases hay que exportarlas manualmente
// Esto crea la exportación por defecto cuando lo queramos
module.exports = Bands;