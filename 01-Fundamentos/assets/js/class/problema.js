

const edwin = {
    nombre: 'Edwin',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const melissa = {
    nombre: 'Melissa',
    edad: 45,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


// edwin.imprimir();


//? Esta es un estilo de metodo o funcion para poder crear un objeto a traves del constructor con el 'new'
function Persona(nombre, edad) {
    console.log('se ejecuta esta linea');
    this.nombre = nombre;
    this.edad   = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
    
}

//? Aqui estamos creando el objeto con el constructor
const maria = new Persona('Maria', 18);
const melisa = new Persona('Melissa', 35);
console.log(maria);
maria.imprimir();
melisa.imprimir();