class Persona {
  

//? Esto nos funciona como un constructor falso, pero funciona igual a el
  static porObjeto({nombre, apellido, pais}){//! Se ponen las llaves para desestructurar un objeto, o sea solo se escriben los atributos asi directo, para no hacer persona.nombre, persona.apellido, etc...
    return new Persona(nombre, apellido, pais)
  }
  
    constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre = "Monst",
      apellido = "Camacho",
      pais = "Mexico";

const ramiro = {
    nombre: 'Ramiro',
    apellido: 'Ugarte',
    pais: 'Mexico'
}      

const monts = new Persona(nombre, apellido, pais);
// const edwin = new Persona(ramiro.nombre, ramiro.apellido, ramiro.pais);
//? Aqui como tal se crea la instancia sin el new porque estamos jalando un metodo static de la clase Persona
const edwin = Persona.porObjeto(ramiro);

monts.getInfo();
edwin.getInfo();
