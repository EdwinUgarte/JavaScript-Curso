//? Crear una classe es lo mejor para poder crear objetos que llevaran los mismos atributos, tipicamente POO
class Persona {
  //* Las propiedades o metodos static son parte de la clase Persona y no de la instancia
  static _conteo = 0;
  static get getConteo() {
    return `El numero de personas creadas es: ${Persona._conteo}`;
  }

  static mensaje() {
    console.log(`Hola a todos soy un metodo static`);
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo = Persona._conteo + 1;
  }

  //? Getters and Setters

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `Soy ${this.nombre} y mi comida favorita es ${this.comida}`;
  }

  //* Esto es un metodo de la classe
  quienSoy() {
    console.log(
      `Soy ${this.nombre} \nMi frase es ${this.frase}\nMi comida favorita es ${this.comida}`
    );
  }

  miCodigo() {
    this.quienSoy();
    console.log(`Y mi codigo es ${this.codigo}`);
  }
}

//? Creación de objetos de la clase Persona mediante el constructor
const spiderman = new Persona(
  "Edwin",
  "spiderman",
  "Tu buen amigo el hombre araña"
);
// const batman = new Persona("Bruce Wayne", "batman", "Yo soy Batman");

console.log(spiderman);
// console.log(batman);

//* Los metodos se llaman con todo y parentesis para que js detecte que se quiere ejecutar
spiderman.miCodigo();

//? Asignando valor con Setter
spiderman.setComidaFavorita = "Pizza de luiguis";

//? Leyendo valor con Getter
console.log(spiderman.getComidaFavorita);

//? Lectura de propiedades o metodos static
console.log(Persona.getConteo);
Persona.mensaje();
