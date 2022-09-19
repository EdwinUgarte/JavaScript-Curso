// ***************** Arreglos *********************

let juegos = ["Zelda", "Mario", "Metroid", "Halo"];
console.log("Largo: ", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

//? Agrega un nuevo juego al final del arreglo
let nuevaLongitud = juegos.push("GOW");
console.log({nuevaLongitud, juegos});


//? Agrega un nuevo juego al principio del arreglo
nuevaLongitud =  juegos.unshift('TLOU11');
console.log({nuevaLongitud, juegos});


//? Borra el ultimo juego del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos})


//? Borra juegos y podemos colocar rangos : devuelve un arreglo con los juegos borrados
let pos = 1;
let juegosBorrados = juegos.splice( pos, 2 );
console.log({ juegosBorrados, juegos});


//? Encuentra el index de algun juego
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);