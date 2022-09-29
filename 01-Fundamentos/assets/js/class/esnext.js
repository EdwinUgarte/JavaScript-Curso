

class Rectangulo {
    
    //? # se coloca antes del atributo para determinar que es private
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;

    }

    calcularArea(){
        console.log(`El area es igual a: ${this.#area}`);
    }

    set setArea(area){
        this.#area = area;
    }

    get getArea() {
        return this.#area;
    }
}

const isoseles = new Rectangulo(10,15);

// isoseles.#area = 100; -> Esto no se puede hacer, marcaria error ya que #area es private

//? Unica forma de modificar atributos privados es con un set
 isoseles.setArea = 520;

 //? Unica forma de leer atributos privados es con un get
console.log(isoseles.getArea);
