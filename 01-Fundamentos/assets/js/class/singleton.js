//? Una clase singleton nos ayuda a poder crear una instancia 'unica'
//? Entonces si queremos guardar un objeto que no cambie aunque creemos nuevas instancias
//? Se crea de esta forma la evaluacion y la asignacion 

class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '') {
        
        if( !!Singleton.instancia ){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }

}

const instancia = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton();

console.log(`El nombre en la instancia es: ${instancia.nombre}`);
console.log(`El nombre en la instancia es: ${instancia2.nombre}`);
console.log(`El nombre en la instancia es: ${instancia3.nombre}`);