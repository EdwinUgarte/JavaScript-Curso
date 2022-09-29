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

//? Clase hija de Persona, utilizando la herencia con extends
class Heroe extends Persona{
    
    clan = 'Sin clan';

    //! Siempre que se crea el constructor de la clase hija, se debe mandar llamar el constructor de la clase padre
    //! se manda llamar con super(args), y siempre va hasta arriba del nuevo constructor
    constructor(nombre, codigo, frase, clan){
        super(nombre, codigo, frase); 
        this.clan = clan;
    }

    //? Podemos sobre escribir o mandar llamar metodos de la clase padre, para mandar llamar se coloca
    //? super.'El metodo'
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}

//? Creación de objetos de la clase Persona mediante el constructor
// const batman = new Persona("Bruce Wayne", "batman", "Yo soy Batman");
const batman = new Heroe('Bruce', 'Batman', 'im batman', 'DC');
batman.quienSoy();
console.log(batman);
