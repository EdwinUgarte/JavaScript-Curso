const heroes = {
  capi: {
    nombre: "Steve",
    poder: "Super fuerza",
  },

  iron: {
    nombre: "Tony",
    poder: "Millonario",
  },

  spiderman: {
    nombre: "Peter",
    poder: "Es una araña",
  },
};

export const buscarHeroe = (id) => {
  const heroe = heroes[id];

  return new Promise((resolve, reject) => {
    if (heroe) {
      
      setTimeout(() => {
        resolve(heroe);
      }, 1000);

    } else {
      reject(`No existe un heroe con ese id ${id}`);
    }
  });
};

//? Funcion async, la palabra 'async' antes de los argumentos convierte la funcion en asyncrona
//? la cual nos devuelve una promesa, en este caso el resolve y reject se sustituyen con
//? return y throw
export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) {
    return heroe;
  } else {
    throw `No existe un heroe con ese id ${id}`;
  }
};

//? Fin de funcion async

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa lenta");
  }, 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa media");
  }, 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa rapida");
  }, 1000);
});

//? Una promesa es una funcion que se va a ejecutar independientemente del orden sincrono,
//? cuando creamos la Promise((resolve, reject) => {})
//? dentro se crea un callback el cual recibe resolve y reject
//? resolve se usa cuando la promesa se cumple
//? reject cuando la promesa no se cumple

export { promesaLenta, promesaMedia, promesaRapida };
