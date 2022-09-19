//* Objeto
//? Los objetos tienen pares de (propiedad/valor)

let personaje = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    long: -118.7,
  },
  trajes: ["Mark I", "Mark V", "HulkBuster"],
  direccion: {
    zip: "10500, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima pelicula": "End Game",
};

console.log(personaje);
console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);
console.log("Edad", personaje.edad);

console.log("Latitud", personaje.coords.lat);
console.log("Longitud", personaje.coords.long);

console.log("No. de Trajes", personaje.trajes.length);
console.log("Ultimo Traje", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo", personaje[x]);

//!Llamar propiedades con espacios
console.log("Ultima Pelicula", personaje["ultima pelicula"]);

//Mas detalles
//!Eliminar una propiedad
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);


//? Congela el objeto desde esta parte y no deja agregar o modificar propiedades 
Object.freeze(personaje);

personaje.dinero = 500000;
personaje.casado = false;

//!Ojo porque aqui si deja modificar ya que esta propiedad esta en segundo nivel
personaje.direccion.ubicacion = "Mexico";
console.log(personaje);

//? Obtiene solo las propiedades de un objeto 
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades});

//? Obtiene solo los valores de un objeto
const valores = Object.values(personaje);
console.log({valores})
