
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


//? Un CallBack es cuando mandamos una funcion por argumento, en este caso el callback es la funcion que estamos 
//? Mandando cuando llamamos la funcion buscarHeroe en index.js

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];

    if( heroe ){
        callback(null, heroe);
    }
    else{
        console.error(`No se encontro el heroe que indicaste ${id}`);
    }
};
