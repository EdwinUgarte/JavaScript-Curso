function crearPersona(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
};
}

//? Aqui estamos tomando la propiedad, 'Apellido' y le cambia el nombre de la variable 
const { apellido: nuevoApellido } = crearPersona("Edwin", "Ortiz");
console.log(nuevoApellido);


const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Edwin", "Ugarte");
console.log(persona);

const persona2 = crearPersona2("Edwin", "Ugarte");
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, true, 50);



//? Crea una funcion flecha y recive los argumentos ¡NOTA: Se ponen los 3 puntos para indicar que son todos los valores de argumentos que envien y no solo 1!, se puede asignar directamente como aqui en edad
const imprimeArgumentos2 = (edad, ...args) => {
  //   console.log({edad, args});
  return args;
};

//? Aqui le estamos asignando los argumentos dados en la funcion a unas variables en concreto
let [casado, vivo, nombre, dinero] = imprimeArgumentos2(true, true, 'Edwin', 500);
console.log({ casado, vivo, nombre, dinero });





//? Creacion de un objeto literal
let personaje = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "HulkBuster"],
};

//! Crea una funcion con desestructuración de argumentos, y se le pueden otorgar valores por default para en caso de que el objeto no lo traiga, como en este caso la edad
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(personaje);
